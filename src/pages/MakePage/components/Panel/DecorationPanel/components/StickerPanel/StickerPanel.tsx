import { fabric } from 'fabric';
import * as S from './StickerPanel.css';
import DecorationItem from '../../../../../../../common/DecorationItem/DecorationItem';
import { stickerImageSrc } from '../../../constants';
import { useCanvasStore, useDecorationPanelStore } from '../../../../../../../store/useMakeStore';

export default function StickerPanel() {
  const { activeSticker, setActiveSticker } = useDecorationPanelStore();
  const canvas = useCanvasStore((state) => state.canvas);

  const handleClick = (stickerSrc: string) => {
    setActiveSticker(stickerSrc);

    canvas?.add(
      new fabric.Image(stickerSrc, {
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        // cornerColor: 'rgba(102,153,255,0.5)',
        // borderColor: 'rgba(102,153,255,0.5)',
        // cornerStrokeColor: 'rgba(102,153,255,0.5)',
        // transparentCorners: false,
        // hasRotatingPoint: true,
      }),
    );

    canvas?.renderAll();
  };

  return (
    <div className={S.stickerContainer}>
      {stickerImageSrc.map((sticker) => (
        <DecorationItem
          key={sticker.id}
          imgSrc={sticker.src}
          isActive={sticker.src === activeSticker}
          onClick={() => handleClick(sticker.src)}
        />
      ))}
    </div>
  );
}
