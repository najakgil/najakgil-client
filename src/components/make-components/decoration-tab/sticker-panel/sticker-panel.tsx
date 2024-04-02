import { useState } from 'react';
import { css } from '@emotion/react';
import { ItemBox } from 'components/item-box';
import { SnackBar } from 'components/snack-bar';
import { useStickerPanelStore } from 'store/panel/useStickerPanelStore';
import { stickerImageSrc } from '../../constants';

interface StickerPanelProps {
  handleStickerClick: (stickerId: number) => void;
}

export default function StickerPanel({ handleStickerClick }: StickerPanelProps) {
  const {
    activeSticker,
    setActiveSticker,
    selectedStickerId,
    setSelectedStickerId,
    stickerObjects,
    setStickerObjects,
  } = useStickerPanelStore();
  const [deleteSnackOpen, setDeleteSnackOpen] = useState(false);

  const handleDeleteStickerItem = () => {
    const deleteStickerIndex = stickerObjects.findIndex(
      (sticker) => sticker.id === selectedStickerId,
    );
    if (deleteStickerIndex !== -1) {
      const updatedStickerObjects = [
        ...stickerObjects.slice(0, deleteStickerIndex),
        ...stickerObjects.slice(deleteStickerIndex + 1),
      ];
      setDeleteSnackOpen(true);
      setTimeout(() => {
        setDeleteSnackOpen(false);
      }, 1000);
      setStickerObjects(updatedStickerObjects);
      setSelectedStickerId('');
      setActiveSticker('');
    }
  };

  return (
    <div css={wrapper}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <p
          style={{
            fontSize: '14px',
            color: selectedStickerId ? '#2294FF' : '#D9D9D9',
            cursor: selectedStickerId ? 'pointer' : 'initial',
            marginRight: '10px',
          }}
          onClick={handleDeleteStickerItem}
        >
          삭제
        </p>
      </div>
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
      <SnackBar
        open={deleteSnackOpen}
        message="스티커가 삭제되었습니다."
        onClose={() => setDeleteSnackOpen(false)}
      />
    </div>
  );
}

const wrapper = css({
  padding: '20px 10px 9px 10px',
  backgroundColor: 'white',
});

const stickerContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gridGap: '10px',
  backgroundColor: 'white',
});
