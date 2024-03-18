import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import {
  useCanvasStore,
  useCharacterPanelStore,
  useDecorationPanelStore,
} from '../../../../store/useMakeStore';

export default function Canvas() {
  const setCanvas = useCanvasStore((state) => state.setCanvas);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { activeCharacter } = useCharacterPanelStore();
  const { activeSticker } = useDecorationPanelStore();

  useEffect(() => {
    if (canvasRef.current) {
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: 'white',
        width: 360,
        height: 360,
        isDrawingMode: true,
      });

      const img = document.createElement('img');
      img.src = 'http://fabricjs.com/assets/pug_small.jpg';
      img.onload = function () {
        const myImg = new fabric.Image(img, {
          left: 0,
          top: 0,
          width: 360,
          height: 360,
        });
        newCanvas.add(myImg);
      };
      fabric.Image.fromURL('http://fabricjs.com/assets/pug_small.jpg', function (myImg) {
        //i create an extra var for to change some image properties
        const img1 = myImg.set({ left: 0, top: 0, width: 150, height: 150 });
        newCanvas.add(img1);
        newCanvas.renderAll();
      });
      // newCanvas.add(
      //   new fabric.Image(activeSticker, {
      //     left: 100,
      //     top: 100,
      //     width: 100,
      //     height: 100,
      //   }),
      // );
      newCanvas.requestRenderAll();
      setCanvas(newCanvas);
    }
  }, [canvasRef, activeSticker]);

  return (
    <div style={{ width: '360px', height: '360px', position: 'relative' }}>
      {/* <div
        style={{
          backgroundImage: `url(${activeCharacter})`,
          width: '360px',
          height: '360px',
          position: 'absolute',
          zIndex: 100,
          backgroundSize: 'cover',
        }}
      ></div> */}
      {/* <img src="/assets/image/character/winter-1.png" alt="sticker" /> */}
      <canvas ref={canvasRef} />
    </div>
  );
}
