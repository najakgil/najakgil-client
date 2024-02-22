import { css } from '@emotion/css';

export const base = css({
  width: '50%',
  minWidth: '390px',
  maxWidth: '450px',
  margin: '0 auto',
  height: '161px',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 20px 20px 20px',
  gap: '24px',
  borderRadius: '20px',
  boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.12)',
  backgroundColor: 'white',
  position: 'fixed',
  zIndex: 10000,
  bottom: '30px',
  left: '0px',
  right: '0px',
  color: '#1E212B',
  fontSize: '18px',
  fontWeight: '600',
  '&::after': {
    visibility: 'hidden',
  },
});

export const bottomSheetBar = css({
  margin: '0 auto',
  width: '48px',
  height: '4px',
  borderRadius: '999px',
  backgroundColor: '#E5E8EB',
});

export const groupButton = css({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});

export const overlay = css({
  position: 'fixed',
  inset: 0,
  margin: '0 auto',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
  backgroundColor: 'rgba(11, 19, 30, 0.37)',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)',
});
