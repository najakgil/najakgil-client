import React from 'react';
import { css } from '@emotion/react';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';

export default function BrushPanel() {
  const { brushColor, setBrushColor, brushSize, setBrushSize } = useBrushPanelStore();
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(event.target.value));
  };

  return (
    <div css={wrapper}>
      <div css={contentBox}>
        <label css={title}>펜 색상</label>
        <input
          type="color"
          id="brushColor"
          name="brushColor"
          value={brushColor}
          onChange={handleColorChange}
        />
      </div>
      <div css={contentBox}>
        <label css={title}>펜 굵기</label>
        <input
          type="range"
          id="brushSize"
          name="brushSize"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleSizeChange}
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
