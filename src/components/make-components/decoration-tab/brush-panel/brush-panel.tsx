import React, { useState } from 'react';
import { css } from '@emotion/react';
import { SnackBar } from 'components/snack-bar';
import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';

export default function BrushPanel() {
  const [backSnackOpen, setBackSnackOpen] = useState(false);
  const { brushColor, setBrushColor, brushSize, setBrushSize, brushObjects, setBrushObjects } =
    useBrushPanelStore();
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(event.target.value));
  };

  // TO DO : 이전 버튼 클릭 시 이전 브러쉬 객체를 삭제하는 로직 구현
  const handleBackButtonClick = () => {
    const latestBrushObject = brushObjects[brushObjects.length - 2];
    const updatedBrushObjects = brushObjects.filter(
      (brushObject) => brushObject.id !== latestBrushObject.id,
    );
    setBrushObjects(updatedBrushObjects);
    setBackSnackOpen(true);
    setTimeout(() => {
      setBackSnackOpen(false);
    }, 1000);
  };

  return (
    <div css={wrapper}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <p
          style={{
            fontSize: '14px',
            color: '#AEAEAE',
            cursor: 'pointer',
          }}
          onClick={handleBackButtonClick}
        >
          이전
        </p>
      </div>
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
      <SnackBar
        message="이전으로 돌아갔습니다."
        open={backSnackOpen}
        onClose={() => setBackSnackOpen(false)}
      />
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
