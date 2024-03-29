import { css } from '@emotion/react';
import { useDecorationTabStore } from 'store/tab/useDecorationTabStore';
import { tagList } from '../constants';
import { ResetButton } from '../reset-button';
import { Tag } from '../tag';
import BrushPanel from './brush-panel/brush-panel';
import EraserPanel from './eraser-panel/eraser-panel';
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
  handleDeleteButtonClick: () => void;
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
  handleDeleteButtonClick,
}: DecorationTabProps) {
  const { activeDecorationTag, setActiveDecorationTag } = useDecorationTabStore();
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
        <ResetButton onClick={handleDeleteButtonClick} />
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
      {activeDecorationTag === 'eraser' && <EraserPanel />}
    </>
  );
}
