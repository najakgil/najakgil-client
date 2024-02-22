import { css } from '@emotion/css';

export const wrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 0;
`;

export const container = css`
  width: 100%;
  min-width: 390px;
  max-width: 450px;
  height: 45px;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
