import { css } from '@emotion/react';
import { IconButton } from 'components/icon-button';

interface SnackBarProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

export default function SnackBar({ message, open, onClose }: SnackBarProps) {
  return (
    <div css={wrapper} style={{ display: open ? 'block' : 'none' }}>
      <div css={base}>
        {message}
        <IconButton imgSrc="/svg/close-white.svg" width={20} onClick={onClose} />
      </div>
    </div>
  );
}

const wrapper = css({
  width: '100%',
  minWidth: '320px',
  maxWidth: '360px',
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '10px 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  borderRadius: '5px',
});

const base = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: '400',
  borderRadius: '8px',
  height: '32px',
  boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
});
