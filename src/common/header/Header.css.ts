import { css } from '@emotion/css';

export const wrapper = css`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

export const container = css`
  width: 100%;
  min-width: 360px;
  max-width: 450px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const headerButton = css`
  width: 16px;
  flex: 1;
`;

export const headerTitle = css`
  flex: 3;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #2294ff;
`;
