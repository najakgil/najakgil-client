import { useState } from 'react';
import { css } from '@emotion/react';
import { SnackBar } from 'components/snack-bar';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';
import { usePhotoPanelStore } from 'store/panel/usePhotoPanelStore';
import { useStickerPanelStore } from 'store/panel/useStickerPanelStore';
import { useTextPanelStore } from 'store/panel/useTextPanelStore';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { useCharacterTabStore } from 'store/tab/useCharacterTabStore';
import { useDecorationTabStore } from 'store/tab/useDecorationTabStore';
import { tagList } from '../constants';
import Tag from '../tag/tag';
import ToolButton from '../tool-button/tool-button';
import BrushPanel from './brush-panel/brush-panel';
import PhotoPanel from './photo-panel/photo-panel';
import StickerPanel from './sticker-panel/sticker-panel';
import TextPanel from './text-panel/text-panel';

const tagContainerStyle = css({
  width: '100%',
  height: '40px',
  padding: '20px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderBottom: '5px solid #e0e0e0',
});

interface DecorationTabProps {
  handleEditTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editText: string;
  handleEditTextConfirm: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextButtonClick: () => void;
  inputText: string;
  selectedTextId: string | null;
  handleStickerClick: (stickerId: number) => void;
  handlePhotoClick: () => void;
}

export default function DecorationTab({
  handleEditTextChange,
  editText,
  handleEditTextConfirm,
  handleInputChange,
  handleTextButtonClick,
  inputText,
  selectedTextId,
  handleStickerClick,
  handlePhotoClick,
}: DecorationTabProps) {
  const [openBackSnackBarOpen, setOpenBackSnackBarOpen] = useState(false);
  const [openResetSnackBarOpen, setOpenResetSnackBarOpen] = useState(false);
  const { activeDecorationTag, setActiveDecorationTag } = useDecorationTabStore();
  const { setTextObjects, setInputText, setEditText } = useTextPanelStore();
  const { setStickerObjects, setActiveSticker } = useStickerPanelStore();
  const { setPhotoObjects, setPhotoUrl } = usePhotoPanelStore();
  const { setBrushObjects } = useBrushPanelStore();
  const { setActiveCharacter } = useCharacterTabStore();
  const { setActiveBackgroundColor, setActiveBackgroundImage } = useBackgroundTabStore();

  const handleResetButtonClick = () => {
    setTextObjects([]);
    setStickerObjects([]);
    setPhotoObjects([]);
    setBrushObjects([]);
    setActiveCharacter('/image/character/default.png');
    setActiveBackgroundColor('#FFF5F5');
    setActiveBackgroundImage('');
    setInputText('');
    setEditText('');
    setActiveSticker('');
    setPhotoUrl('');
    setOpenResetSnackBarOpen(true);
    setTimeout(() => {
      setOpenResetSnackBarOpen(false);
    }, 3000);
  };

  return (
    <>
      {/* 태그 */}
      <div css={tagContainerStyle}>
        {tagList.decoration.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.title}
            isActiveTag={activeDecorationTag === tag.tag}
            onClick={() => setActiveDecorationTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
        <ToolButton imageUrl="/svg/reset.svg" onClick={handleResetButtonClick} />
      </div>
      {/* 패널 */}
      {activeDecorationTag === 'text' && (
        <TextPanel
          handleEditTextChange={handleEditTextChange}
          editText={editText}
          handleEditTextConfirm={handleEditTextConfirm}
          handleInputChange={handleInputChange}
          handleTextButtonClick={handleTextButtonClick}
          inputText={inputText}
          selectedTextId={selectedTextId}
        />
      )}
      {activeDecorationTag === 'sticker' && (
        <StickerPanel handleStickerClick={handleStickerClick} />
      )}
      {activeDecorationTag === 'photo' && <PhotoPanel handlePhotoClick={handlePhotoClick} />}
      {activeDecorationTag === 'brush' && <BrushPanel />}
      <SnackBar
        open={openBackSnackBarOpen}
        message="뒤로가기가 실행되었습니다."
        onClose={() => setOpenBackSnackBarOpen(false)}
      />
      <SnackBar
        open={openResetSnackBarOpen}
        message="초기화가 실행되었습니다."
        onClose={() => {
          setOpenResetSnackBarOpen(false);
        }}
      />
    </>
  );
}
