/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ItemBoxProps {
  imgSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function ItemBox({ imgSrc, isActive = false, onClick }: ItemBoxProps) {
  const tagStyle = isActive ? activeStyle : inactiveStyle;
  return (
    <img
      css={[wrapperStyle, tagStyle]}
      src={imgSrc}
      onClick={onClick}
    />
  );
}

const wrapperStyle = css({
  width: '100%',
  aspectRatio: 1,
  borderRadius: '8px',
  cursor: 'pointer',
});

const activeStyle = css({
  border: '1.5px solid #2294ff',
});

const inactiveStyle = css({
  border: '0.5px solid #d9d9d9',
});
