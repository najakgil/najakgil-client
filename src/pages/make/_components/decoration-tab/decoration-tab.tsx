import { css } from '@emotion/react';
import { useDecorationTabStore } from 'store/tab/useDecorationTabStore';
import { tagList } from '../constants';
import { ResetButton } from '../reset-button';
import { Tag } from '../tag';
import BrushPanel from './brush-panel/brush-panel';
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

export default function DecorationTab() {
  const { activeDecorationTag, setActiveDecorationTag } = useDecorationTabStore();
  console.log('꾸미기 태그', activeDecorationTag);
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
        <ResetButton onClick={() => console.log('리셋')} />
      </div>
      {/* 패널 */}
      {activeDecorationTag === 'text' && <TextPanel />}
      {activeDecorationTag === 'sticker' && <StickerPanel />}
      {activeDecorationTag === 'photo' && <div>사진 패널</div>}
      {activeDecorationTag === 'brush' && <BrushPanel />}
      {activeDecorationTag === 'eraser' && <div>지우개 패널</div>}
    </>
  );
}
