import { css } from '@emotion/react';
import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';

export default function BackgroundColorPanel() {
  const { activeBackgroundColor, setActiveBackgroundColor } = useBackgroundTabStore();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveBackgroundColor(event.target.value);
  };
  return (
    <div css={wrapper}>
      <div css={contentBox}>
        <label css={title}>배경 색상</label>
        <input
          type="color"
          id="brushColor"
          name="brushColor"
          value={activeBackgroundColor}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export const wrapper = css({
  padding: '20px',
});

export const contentBox = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
  marginBottom: '20px',
});

export const title = css({
  fontSize: '14px',
  fontWeight: 'bold',
});
