import { css } from '@emotion/css';

export const active = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  background-color: #2294ff;
  color: white;
  font-weight: bold;
  border-radius: 3px;
`;

export const inactive = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #2294ff;
  background-color: white;
  font-weight: normal;
  border: 1px solid #2294ff;
  border-radius: 3px;
`;
