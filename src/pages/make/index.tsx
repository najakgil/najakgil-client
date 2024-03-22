import { useEffect, useRef, useState } from 'react';
import { Header } from 'components/header';
import { IconButton } from 'components/icon-button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';
import { useCanvasStore } from 'store/panel/useCanvasStore';
import { useTextPanelStore } from 'store/panel/useTextPanelStore';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { useCharacterTabStore } from 'store/tab/useCharacterTabStore';
import { useDecorationTabStore } from 'store/tab/useDecorationTabStore';
import { useTabStore } from 'store/useTabStore';
import BackgroundTab from './_components/background-tab/background-tab';
import CharacterTab from './_components/character-tab/character-tab';
import { tabList } from './_components/constants';
import DecorationTab from './_components/decoration-tab/decoration-tab';
import { Tab } from './_components/tab';

const Make = () => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [draggingText, setDraggingText] = useState<boolean>(false);
  const [textPosition, setTextPosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 }); // Initial position
  const { activeTab, setActiveTab } = useTabStore();
  const { activeDecorationTag } = useDecorationTabStore();
  const { isDrawing, setIsDrawing, brushPosition, setBrushPosition, brushColor, brushSize } =
    useBrushPanelStore();
  const { textContent, textColor, textSize, textFontWeight } = useTextPanelStore();
  const { textObjects, setTextObjects } = useCanvasStore();
  const { activeCharacter } = useCharacterTabStore();
  const { activeBackgroundColor, activeBackgroundImage } = useBackgroundTabStore();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const onMouseDown = (event: MouseEvent) => {
      if (activeDecorationTag !== 'text') {
        setIsDrawing(true);
        setBrushPosition({ x: event.offsetX, y: event.offsetY });
      } else {
        handleTextMouseDown(event);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (activeDecorationTag !== 'text') {
        handleBrushMouseMove(event);
      } else {
        handleTextMouseMove(event);
      }
    };

    const onMouseUp = () => {
      if (activeDecorationTag !== 'text') {
        setIsDrawing(false);
      } else {
        setDraggingText(false);
      }
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
    };
  }, [activeDecorationTag, isDrawing, brushPosition, setBrushPosition]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeDecorationTag === 'text') {
      ctx.fillStyle = textColor;
      ctx.font = `${textSize}px Arial`;
      ctx.fillText(textContent, textPosition.x, textPosition.y);
    }
  }, [activeDecorationTag, textContent, textColor, textSize, textFontWeight, textPosition]);

  const handleBrushMouseMove = (event: MouseEvent) => {
    if (!isDrawing || !canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const currentPosition = { x: event.offsetX, y: event.offsetY };

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(brushPosition.x, brushPosition.y);
    ctx.lineTo(currentPosition.x, currentPosition.y);
    ctx.stroke();

    setBrushPosition(currentPosition);
  };

  const handleTextMouseDown = (event: MouseEvent) => {
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) {
      return;
    }

    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    // Check if mouse is within text bounding box
    if (
      mouseX >= textPosition.x &&
      mouseX <= textPosition.x + 100 && // Adjust width as needed
      mouseY >= textPosition.y - 20 &&
      mouseY <= textPosition.y &&
      !draggingText
    ) {
      setDraggingText(true);
    }
  };

  const handleTextMouseMove = (event: MouseEvent) => {
    if (!draggingText || !canvasRef.current) {
      return;
    }

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    setTextPosition({ x: mouseX, y: mouseY });
  };

  return (
    <>
      <Header
        left={<IconButton imgSrc="/svg/back-arrow.svg" width={18} onClick={() => router.back()} />}
        title="나작길 만들기"
        right=""
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px 0px',
        }}
      >
        <div style={{ position: 'relative', width: '360px', height: '360px' }}>
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            id="canvas"
            width={360}
            height={360}
            style={{
              backgroundImage: `url(${activeCharacter})`,
              backgroundSize: 'cover',
              position: 'absolute',
              zIndex: 10,
            }}
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              background: activeBackgroundColor,
              backgroundImage: `url(${activeBackgroundImage})`,
              backgroundSize: 'cover',
              position: 'absolute',
              zIndex: 0,
            }}
          ></div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div style={{ width: '100%', display: 'flex' }}>
        {tabList.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.title}
            isActiveTab={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      {/* Panels */}
      {activeTab === 1 && <CharacterTab />}
      {activeTab === 2 && <DecorationTab />}
      {activeTab === 3 && <BackgroundTab />}
    </>
  );
};

export default Make;
