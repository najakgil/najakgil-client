import { css } from '@emotion/css';

export const motion = css`
  position: 'fixed';
  top: 0;
  z-index: 10;
  width: 100%;
  min-width: 390px;
  max-width: 450px;
`;

export const base = css({
  height: '100vh',
  background: '#2294FF',
  padding: '24px',
  color: 'white',
  position: 'fixed',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
});

export const header = css({
  height: '39px',
});

export const button = css({
  cursor: 'pointer',
  background: 'none',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
});

export const account = css({
  display: 'flex',
  marginTop: '240px',
  gap: '40px',
});

export const accountButton = css({
  color: 'rgba(255, 255, 255, 0.50)',
  fontSize: '15px',
});

export const accountButtonBox = css({
  display: 'flex',
  padding: '18px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  cursor: 'pointer',
});

export const kakaoButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '56px',
  borderRadius: '16px',
  backgroundColor: '#FEE500',
  color: '#000000',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer',
  gap: '28px',
});
