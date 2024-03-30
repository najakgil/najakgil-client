import { useEffect, useRef, useState } from 'react';
import { Drawer } from 'components/drawer';
import { Header } from 'components/header';
import { IconButton } from 'components/icon-button';
import { useRouter } from 'next/router';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';
import { usePhotoPanelStore } from 'store/panel/usePhotoPanelStore';
import { useStickerPanelStore } from 'store/panel/useStickerPanelStore';
import { useTextPanelStore } from 'store/panel/useTextPanelStore';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { useCharacterTabStore } from 'store/tab/useCharacterTabStore';
import { useDecorationTabStore } from 'store/tab/useDecorationTabStore';
import { useTabStore } from 'store/useTabStore';
import BackgroundTab from './_components/background-tab/background-tab';
import CharacterTab from './_components/character-tab/character-tab';
import { tabList } from './_components/constants';
import DecorationTab from './_components/decoration-tab/decoration-tab';
import Tab from './_components/tab/tab';

const Make = () => {
  // Drawer 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const router = useRouter();
  // 탭
  const { activeTab, setActiveTab } = useTabStore();
  // 태그
  const { activeDecorationTag } = useDecorationTabStore();
  // 캐릭터
  const { activeCharacter } = useCharacterTabStore();
  // 배경화면
  const { activeBackgroundColor, activeBackgroundImage } = useBackgroundTabStore();
  // 캔버스
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 텍스트
  const {
    textObjects,
    setTextObjects,
    inputText,
    setInputText,
    editText,
    setEditText,
    selectedTextId,
    setSelectedTextId,
    textColor,
    textSize,
  } = useTextPanelStore();
  // 스티커
  const { stickerObjects, setStickerObjects, setSelectedStickerId } = useStickerPanelStore();
  // 사진
  const { photoObjects, setPhotoObjects, setSelectedPhotoId, photoUrl } = usePhotoPanelStore();
  // 브러쉬
  const { brushObjects, setBrushObjects, brushColor, brushSize } = useBrushPanelStore();

  // 캔버스 초기화
  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef.current);
    }
  }, []);

  // 캔버스 오브젝트 그리기
  useEffect(() => {
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    textObjects.forEach(({ text, x, y, color, font }) => {
      context.fillStyle = color;
      context.font = font;
      context.fillText(text, x, y);
    });

    stickerObjects.forEach(({ imageUrl, x, y }) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        context.drawImage(image, x, y, 100, 100);
      };
    });

    photoObjects.forEach(({ imageUrl, x, y }) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        context.drawImage(image, x, y, 100, 100);
      };
    });

    brushObjects.forEach((brushObject) => {
      const { path } = brushObject;
      if (path?.length < 2) {
        return;
      }
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
      context.beginPath();
      context.moveTo(path[0].x, path[0].y);
      path.forEach((point) => {
        context.lineTo(point.x, point.y);
      });
      context.stroke();
    });
  }, [canvas, textObjects, stickerObjects, photoObjects, brushObjects, brushColor, brushSize]);

  // [텍스트] 텍스트 오브젝트 추가
  const handleTextButtonClick = () => {
    if (!canvas) {
      return;
    }
    if (!inputText) {
      return;
    }

    const newTextObject = {
      id: `${Date.now()}`,
      text: inputText,
      x: 50,
      y: 50,
      color: textColor,
      font: `${textSize}px Arial`,
      dragging: false,
      offsetX: 0,
      offsetY: 0,
    };

    setTextObjects([...textObjects, newTextObject]);
    setInputText('');
  };

  // [스티커] 스티커 오브젝트 추가
  const handleStickerClick = (stickerId: number) => {
    if (!canvas) {
      return;
    }
    let imageUrl = '';
    switch (stickerId) {
      case 1:
        imageUrl = '/image/sticker/sticker-1.png';
        break;
      case 2:
        imageUrl = '/image/sticker/sticker-2.png';
        break;
      case 3:
        imageUrl = '/image/sticker/sticker-3.png';
        break;
      case 4:
        imageUrl = '/image/sticker/sticker-4.png';
        break;
      case 5:
        imageUrl = '/image/sticker/sticker-5.png';
        break;
      case 6:
        imageUrl = '/image/sticker/sticker-6.png';
        break;
    }

    const newStickerObject = {
      id: `${Date.now()}`,
      imageUrl: imageUrl,
      x: 10,
      y: 10,
      dragging: false,
      offsetX: 0,
      offsetY: 0,
    };
    setStickerObjects([...stickerObjects, newStickerObject]);
  };

  // [사진] 사진 오브젝트 추가
  const handlePhotoClick = () => {
    if (!canvas) {
      return;
    }

    const newPhotoObject = {
      id: `${Date.now()}`,
      imageUrl: photoUrl,
      x: 10,
      y: 10,
      dragging: false,
      offsetX: 0,
      offsetY: 0,
    };
    setPhotoObjects([...photoObjects, newPhotoObject]);
  };

  // [텍스트] 텍스트 내용 입력
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // [텍스트] 텍스트 내용 수정
  const handleEditTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  // [텍스트] 캔버스 클릭 이벤트
  const handleTextCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvasRect = canvas?.getBoundingClientRect();
    if (!canvasRect || !canvas) {
      return;
    }

    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    textObjects.forEach((textObject) => {
      const { id, x, y, text, font } = textObject;
      const context = canvas.getContext('2d');
      if (!context) {
        return;
      }

      context.font = font;
      const textWidth = context.measureText(text).width;
      const textHeight = parseInt(font, 10);

      if (mouseX >= x && mouseX <= x + textWidth && mouseY >= y - textHeight && mouseY <= y) {
        setEditText(text);
        setSelectedTextId(id);
      }
    });
  };

  // [스티커] 캔버스 클릭 이벤트
  const handleStickerCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvasRect = canvas?.getBoundingClientRect();
    if (!canvasRect || !canvas) {
      return;
    }

    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    stickerObjects.forEach((stickerObject) => {
      const { id, x, y } = stickerObject;

      if (mouseX >= x && mouseX <= x + 100 && mouseY >= y && mouseY <= y + 100) {
        setSelectedStickerId(id);
      }
    });
  };

  // [사진] 캔버스 클릭 이벤트
  const handlePhotoCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvasRect = canvas?.getBoundingClientRect();
    if (!canvasRect || !canvas) {
      return;
    }

    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    photoObjects.forEach((photoObject) => {
      const { id, x, y } = photoObject;

      if (mouseX >= x && mouseX <= x + 100 && mouseY >= y && mouseY <= y + 100) {
        setSelectedPhotoId(id);
      }
    });
  };

  // [텍스트] 텍스트 수정 확인
  const handleEditTextConfirm = () => {
    if (!selectedTextId) {
      return;
    }

    const updatedTextObjects = textObjects.map((textObject) => {
      if (textObject.id === selectedTextId) {
        return { ...textObject, text: editText, color: textColor, font: `${textSize}px Arial` };
      }
      return textObject;
    });
    setTextObjects(updatedTextObjects);
    setEditText('');
    setSelectedTextId('');
  };

  //  [텍스트] 텍스트 드래그
  const handleTextMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    textObjects.forEach((textObject, index) => {
      const { x, y, dragging } = textObject;
      if (mouseX >= x && mouseX <= x + 100 && mouseY >= y - 20 && mouseY <= y && !dragging) {
        const offsetX = mouseX - x;
        const offsetY = mouseY - y;

        const updatedTextObjects = [...textObjects];
        updatedTextObjects[index] = {
          ...updatedTextObjects[index],
          dragging: true,
          offsetX,
          offsetY,
        };
        setTextObjects(updatedTextObjects);
      }
    });
  };

  //  [스티커] 스티커 드래그
  const handleStickerMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    stickerObjects.forEach((stickerObject, index) => {
      const { x, y, dragging } = stickerObject;
      if (mouseX >= x && mouseX <= x + 100 && mouseY >= y && mouseY <= y + 100 && !dragging) {
        const offsetX = mouseX - x;
        const offsetY = mouseY - y;

        const updatedStickerObjects = [...stickerObjects];
        updatedStickerObjects[index] = {
          ...updatedStickerObjects[index],
          dragging: true,
          offsetX,
          offsetY,
        };
        setStickerObjects(updatedStickerObjects);
      }
    });
  };

  // [사진] 사진 드래그
  const handlePhotoMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    photoObjects.forEach((photoObject, index) => {
      const { x, y, dragging } = photoObject;
      if (mouseX >= x && mouseX <= x + 100 && mouseY >= y && mouseY <= y + 100 && !dragging) {
        const offsetX = mouseX - x;
        const offsetY = mouseY - y;

        const updatedPhotoObjects = [...photoObjects];
        updatedPhotoObjects[index] = {
          ...updatedPhotoObjects[index],
          dragging: true,
          offsetX,
          offsetY,
        };
        setPhotoObjects(updatedPhotoObjects);
      }
    });
  };

  // [브러쉬] 브러쉬 오브젝트 추가
  const handleBrushClick = () => {
    if (!canvas) {
      return;
    }

    const newBrushObject = {
      id: `${Date.now()}`,
      x: 10,
      y: 10,
      dragging: false,
      offsetX: 0,
      offsetY: 0,
      path: [],
    };
    setBrushObjects([...brushObjects, newBrushObject]);
  };

  // [브러쉬] 브러쉬 드래그
  const handleBrushMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    const newBrushObject = {
      id: `${Date.now()}`,
      x: mouseX,
      y: mouseY,
      dragging: true,
      offsetX: 0,
      offsetY: 0,
      path: [{ x: mouseX, y: mouseY }],
    };
    const updatedBrushObjects = [...brushObjects, newBrushObject];
    setBrushObjects(updatedBrushObjects);
  };

  //  [텍스트] 텍스트 드래그 이동
  const handleTextMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    textObjects.forEach((textObject, index) => {
      const { dragging, offsetX, offsetY } = textObject;
      if (dragging) {
        const updatedTextObjects = [...textObjects];
        updatedTextObjects[index] = {
          ...updatedTextObjects[index],
          x: mouseX - offsetX,
          y: mouseY - offsetY,
        };
        setTextObjects(updatedTextObjects);
      }
    });
  };

  //  [스티커] 스티커 드래그 이동
  const handleStickerMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    stickerObjects.forEach((stickerObject, index) => {
      const { dragging, offsetX, offsetY } = stickerObject;
      if (dragging) {
        const updatedStickerObjects = [...stickerObjects];
        updatedStickerObjects[index] = {
          ...updatedStickerObjects[index],
          x: mouseX - offsetX,
          y: mouseY - offsetY,
        };
        setStickerObjects(updatedStickerObjects);
      }
    });
  };

  //  [사진] 사진 드래그 이동
  const handlePhotoMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    photoObjects.forEach((photoObject, index) => {
      const { dragging, offsetX, offsetY } = photoObject;
      if (dragging) {
        const updatedPhotoObjects = [...photoObjects];
        updatedPhotoObjects[index] = {
          ...updatedPhotoObjects[index],
          x: mouseX - offsetX,
          y: mouseY - offsetY,
        };
        setPhotoObjects(updatedPhotoObjects);
      }
    });
  };

  //  [브러쉬] 브러쉬 드래그 이동
  const handleBrushMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    const updatedBrushObjects = brushObjects.map((brushObject) => {
      if (brushObject.dragging) {
        const updatedPath = [...brushObject.path, { x: mouseX, y: mouseY }];
        return { ...brushObject, path: updatedPath };
      }
      return brushObject;
    });
    setBrushObjects(updatedBrushObjects);
  };

  //  [텍스트] 텍스트 드래그 종료
  const handleTextMouseUp = () => {
    const updatedTextObjects = textObjects.map((textObject) => ({
      ...textObject,
      dragging: false,
    }));
    setTextObjects(updatedTextObjects);
  };

  //  [스티커] 스티커 드래그 종료
  const handleStickerMouseUp = () => {
    const updatedStickerObjects = stickerObjects.map((stickerObject) => ({
      ...stickerObject,
      dragging: false,
    }));
    setStickerObjects(updatedStickerObjects);
  };

  //  [사진] 사진 드래그 종료
  const handlePhotoMouseUp = () => {
    const updatedPhotoObjects = photoObjects.map((photoObject) => ({
      ...photoObject,
      dragging: false,
    }));
    setPhotoObjects(updatedPhotoObjects);
  };

  //  [브러쉬] 브러쉬 드래그 종료
  const handleBrushMouseUp = () => {
    const updatedBrushObjects = brushObjects.map((brushObject) => ({
      ...brushObject,
      dragging: false,
    }));
    setBrushObjects(updatedBrushObjects);
  };

  return (
    <>
      <Header
        left={<IconButton imgSrc="/svg/menu.svg" width={18} onClick={openDrawer} />}
        title=""
        right={
          <p
            onClick={() => router.push('/preview')}
            style={{ fontSize: '14px', color: '#2294FF', cursor: 'pointer' }}
          >
            다음
          </p>
        }
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
          <canvas
            ref={canvasRef}
            id="canvas"
            width={360}
            height={360}
            style={{
              borderRadius: '3px',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              backgroundImage: `url(${activeCharacter})`,
              backgroundSize: 'cover',
              zIndex: 5,
            }}
            onClick={
              activeDecorationTag === 'text'
                ? handleTextCanvasClick
                : activeDecorationTag === 'sticker'
                  ? handleStickerCanvasClick
                  : activeDecorationTag === 'photo'
                    ? handlePhotoCanvasClick
                    : activeDecorationTag === 'brush'
                      ? handleBrushClick
                      : undefined
            }
            onMouseDown={
              activeDecorationTag === 'text'
                ? handleTextMouseDown
                : activeDecorationTag === 'sticker'
                  ? handleStickerMouseDown
                  : activeDecorationTag === 'photo'
                    ? handlePhotoMouseDown
                    : activeDecorationTag === 'brush'
                      ? handleBrushMouseDown
                      : undefined
            }
            onMouseMove={
              activeDecorationTag === 'text'
                ? handleTextMouseMove
                : activeDecorationTag === 'sticker'
                  ? handleStickerMouseMove
                  : activeDecorationTag === 'photo'
                    ? handlePhotoMouseMove
                    : activeDecorationTag === 'brush'
                      ? handleBrushMouseMove
                      : undefined
            }
            onMouseUp={
              activeDecorationTag === 'text'
                ? handleTextMouseUp
                : activeDecorationTag === 'sticker'
                  ? handleStickerMouseUp
                  : activeDecorationTag === 'photo'
                    ? handlePhotoMouseUp
                    : activeDecorationTag === 'brush'
                      ? handleBrushMouseUp
                      : undefined
            }
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '3px',
              background: activeBackgroundColor,
              backgroundImage: `url(${activeBackgroundImage})`,
              backgroundSize: 'cover',
              position: 'absolute',
              zIndex: 0.5,
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
      {activeTab === 2 && (
        <DecorationTab
          handleEditTextChange={handleEditTextChange}
          editText={editText}
          handleEditTextConfirm={handleEditTextConfirm}
          handleInputChange={handleInputChange}
          handleTextButtonClick={handleTextButtonClick}
          inputText={inputText}
          selectedTextId={selectedTextId}
          handleStickerClick={handleStickerClick}
          handlePhotoClick={handlePhotoClick}
        />
      )}
      {activeTab === 3 && <BackgroundTab />}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default Make;
