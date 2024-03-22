import { css } from '@emotion/react';
import { ItemBox } from 'components/item-box';
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

export default function StickerPanel() {
  return (
    <div css={stickerContainer}>
      {stickerImageSrc.map((sticker, index) => (
        <ItemBox
          key={index}
          imgSrc={sticker.src}
          onClick={() => console.log('sticker clicked')}
        />
      ))}
    </div>
  );
}
