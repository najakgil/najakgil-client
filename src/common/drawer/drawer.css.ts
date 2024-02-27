import { css } from '@emotion/css';

export const motion = css`
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  min-width: 390px;
  max-width: 450px;
`;

export const base = css`
  height: 100vh;
  background: #2294ff;
  padding: 24px;
  color: white;
  position: fixed;
  width: 100%;
  min-width: 390px;
  max-width: 450px;
`;

export const header = css`
  height: 39px;
  img {
    cursor: pointer;
  }
`;

export const button = css`
  cursor: pointer;
  background: none;
  height: 56px;
  display: flex;
  align-items: center;
`;

export const account = css`
  display: flex;
  margin-top: 240px;
  gap: 40px;
`;

export const accountButton = css`
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  cursor: pointer;
`;

export const accountButtonBox = css`
  display: 'flex';
  padding: '18px 0px';
  align-items: 'center';
  justify-content: 'space-between';
  gap: '10px';
  cursor: 'pointer';
`;

export const kakaoButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background-color: #FEE500;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  gap: 28px;
`;
