import { useState } from 'react';
import { css } from '@emotion/react';
import { SnackBar } from 'components/snack-bar';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';
import { tagList } from '../constants';
import BackgroundColorPanel from './background-color-panel';
import BackgroundImagePanel from './background-image-panel';
import Tag from '../tag/tag';
import ToolButton from '../tool-button/tool-button';

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
  const [openResetSnackBarOpen, setOpenResetSnackBarOpen] = useState(false);
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
        <ToolButton
          imageUrl="/svg/reset.svg"
          onClick={() => {
            setActiveBackgroundColor('');
            setActiveBackgroundImage('');
            setOpenResetSnackBarOpen(true);
            setTimeout(() => {
              setOpenResetSnackBarOpen(false);
            }, 3000);
          }}
        />
      </div>
      {/* 패널 */}
      {activeBackgroundTag === 'color' && <BackgroundColorPanel />}
      {activeBackgroundTag === 'image' && <BackgroundImagePanel />}
      <SnackBar
        open={openResetSnackBarOpen}
        message="초기화가 실행되었습니다."
        onClose={() => setOpenResetSnackBarOpen(false)}
      />
    </>
  );
}
