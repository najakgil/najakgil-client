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
import { Tag } from '../tag';
import { ToolButton } from '../tool-button';
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
  const { textObjects, setTextObjects, setSelectedTextId, setInputText, setEditText } =
    useTextPanelStore();
  const { stickerObjects, setStickerObjects, setActiveSticker } = useStickerPanelStore();
  const { photoObjects, setPhotoObjects, setPhotoUrl } = usePhotoPanelStore();
  const { brushObjects, setBrushObjects } = useBrushPanelStore();
  const { setActiveCharacter } = useCharacterTabStore();
  const { setActiveBackgroundColor, setActiveBackgroundImage } = useBackgroundTabStore();

  const handleBackButtonClick = () => {
    if (activeDecorationTag === 'text') {
      const latestTextObject = textObjects[textObjects.length - 1];
      const updatedTextObjects = textObjects.filter(
        (textObject) => textObject.id !== latestTextObject.id,
      );
      setTextObjects(updatedTextObjects);
      setSelectedTextId('');
    } else if (activeDecorationTag === 'sticker') {
      const latestStickerObject = stickerObjects[stickerObjects.length - 1];
      const updatedStickerObjects = stickerObjects.filter(
        (stickerObject) => stickerObject.id !== latestStickerObject.id,
      );
      setStickerObjects(updatedStickerObjects);
      setActiveSticker('');
    } else if (activeDecorationTag === 'photo') {
      const latestPhotoObject = photoObjects[photoObjects.length - 1];
      const updatedPhotoObjects = photoObjects.filter(
        (photoObject) => photoObject.id !== latestPhotoObject.id,
      );
      setPhotoObjects(updatedPhotoObjects);
    } else if (activeDecorationTag === 'brush') {
      const latestBrushObject = brushObjects[brushObjects.length - 1];
      const updatedBrushObjects = brushObjects.filter(
        (brushObject) => brushObject.id !== latestBrushObject.id,
      );
      setBrushObjects(updatedBrushObjects);
    }
    setOpenBackSnackBarOpen(true);
    setTimeout(() => {
      setOpenBackSnackBarOpen(false);
    }, 3000);
  };

  const handleResetButtonClick = () => {
    setTextObjects([]);
    setStickerObjects([]);
    setPhotoObjects([]);
    setBrushObjects([]);
    setActiveCharacter('/image/character/default.png');
    setActiveBackgroundColor('');
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
        <ToolButton imageUrl="/svg/back.svg" onClick={handleBackButtonClick} />
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
