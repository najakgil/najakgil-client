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

interface ResetButtonProps {
  onClick: () => void;
}

export default function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button onClick={onClick} css={baseStyle}>
      <Image src="/svg/reset.svg" alt="reset" width={20} height={20} />
    </button>
  );
}
