import { css } from '@emotion/css';

export const base = css`
  width: 100%;
  min-width: 360px; 
  max-width: 450px; 
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center';
`;

export const buttonContainer = css({
  display: 'flex',
  width: '354px',
  gap: '10px',
});
