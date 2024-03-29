import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'components/button';
import { Header } from 'components/header';
import { IconButton } from 'components/icon-button';
import { SnackBar } from 'components/snack-bar';
import { useRouter } from 'next/router';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';
import { usePhotoPanelStore } from 'store/panel/usePhotoPanelStore';
import { useStickerPanelStore } from 'store/panel/useStickerPanelStore';
import { useTextPanelStore } from 'store/panel/useTextPanelStore';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { useCharacterTabStore } from 'store/tab/useCharacterTabStore';

const PreviewPage = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const cardRef = useRef(null);
  const [downloadSnackBarOpen, setDownloadSnackBarOpen] = useState(false);
  const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
  const { textObjects } = useTextPanelStore();
  const { stickerObjects } = useStickerPanelStore();
  const { photoObjects } = usePhotoPanelStore();
  const { brushObjects, brushColor, brushSize } = useBrushPanelStore();
  const { activeCharacter } = useCharacterTabStore();
  const { activeBackgroundColor, activeBackgroundImage } = useBackgroundTabStore();

  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef.current);
    }
  }, []);

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

  const downloadImage = () => {
    const card = cardRef.current;
    if (card) {
      domtoimage.toBlob(card).then((blob) => {
        saveAs(blob, 'najakgil.png');
        setDownloadSnackBarOpen(true);
        setTimeout(() => {
          setDownloadSnackBarOpen(false);
        }, 3000);
      });
    } else {
      console.error('오류 발생');
    }
  };

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopySnackBarOpen(true);
    setTimeout(() => {
      setCopySnackBarOpen(false);
    }, 3000);
  };

  return (
    <>
      <Header
        left={<IconButton imgSrc="/svg/back-arrow.svg" width={18} onClick={() => router.back()} />}
        title=""
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
        <div style={{ position: 'relative', width: '360px', height: '360px' }} ref={cardRef}>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '35px',
        }}
      >
        <div
          style={{
            width: '360px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Button variants="primary" onClick={downloadImage}>
            다운로드
          </Button>
          <Button variants="secondary" onClick={copyLink}>
            링크 복사하기
          </Button>
        </div>
      </div>
      <SnackBar
        message="링크가 복사되었습니다."
        open={copySnackBarOpen}
        onClose={() => setCopySnackBarOpen(false)}
      />
      <SnackBar
        message="다운로드가 완료되었습니다."
        open={downloadSnackBarOpen}
        onClose={() => setDownloadSnackBarOpen(false)}
      />
    </>
  );
};

export default PreviewPage;
