import { css } from '@emotion/react';
import { ItemBox } from 'components/item-box';
import { useStickerPanelStore } from 'store/panel/useStickerPanelStore';
import { stickerImageSrc } from '../../constants';

export const stickerContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '9px 10px 9px 10px',
  gridGap: '10px',
  backgroundColor: 'white',
});

interface StickerPanelProps {
  handleStickerClick: (stickerId: number) => void;
}

export default function StickerPanel({ handleStickerClick }: StickerPanelProps) {
  const { activeSticker, setActiveSticker } = useStickerPanelStore();
  return (
    <div css={stickerContainer}>
      {stickerImageSrc.map((sticker, index) => (
        <ItemBox
          key={index}
          imgSrc={sticker.src}
          onClick={() => {
            handleStickerClick(index + 1);
            setActiveSticker(sticker.src);
          }}
          isActive={sticker.src === activeSticker}
        />
      ))}
    </div>
  );
}
