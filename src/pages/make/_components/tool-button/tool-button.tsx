import { css } from '@emotion/react';
import Image from 'next/image';

const baseStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1',
  backgroundColor: '#AFD8FF',
  borderRadius: '3px',
});

interface ToolButtonProps {
  imageUrl: string;
  onClick: () => void;
}

export default function ToolButton({ imageUrl, onClick }: ToolButtonProps) {
  return (
    <button onClick={onClick} css={baseStyle}>
      <Image src={imageUrl} alt="tool-button" width={20} height={20} />
    </button>
  );
}
