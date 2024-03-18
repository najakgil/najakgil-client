/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapperStyle = css({
  width: '100%',
  aspectRatio: 1,
  borderRadius: '8px',
  cursor: 'pointer',
});

interface ItemBoxProps {
  imgSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function ItemBox({ imgSrc, isActive, onClick }: ItemBoxProps) {
  return (
    <img
      css={wrapperStyle}
      style={{
        border: isActive ? '1.5px solid #2294ff' : '0.5px solid #d9d9d9',
      }}
      src={imgSrc}
      onClick={onClick}
    />
  );
}
