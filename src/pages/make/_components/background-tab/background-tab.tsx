import { css } from '@emotion/react';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { tagList } from '../constants';
import { ResetButton } from '../reset-button';
import { Tag } from '../tag';
import BackgroundColorPanel from './background-color-panel';
import BackgroundImagePanel from './background-image-panel';

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

export default function BackgroundTab() {
  const {
    activeBackgroundTag,
    setActiveBackgroundTag,
    setActiveBackgroundColor,
    setActiveBackgroundImage,
  } = useBackgroundTabStore();
  return (
    <>
      {/* 태그 */}
      <div css={tagContainerStyle}>
        {tagList.background.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.title}
            isActiveTag={activeBackgroundTag === tag.tag}
            onClick={() => setActiveBackgroundTag(tag.tag)}
          >
            {tag.title}
          </Tag>
        ))}
        <ResetButton
          onClick={() => {
            setActiveBackgroundColor('');
            setActiveBackgroundImage('');
          }}
        />
      </div>
      {/* 패널 */}
      {activeBackgroundTag === 'color' && <BackgroundColorPanel />}
      {activeBackgroundTag === 'image' && <BackgroundImagePanel />}
    </>
  );
}
