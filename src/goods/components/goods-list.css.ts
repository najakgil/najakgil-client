import { css } from '@emotion/css';

export const wrapper = css`
  width: 328px;

  display: flex;
  flex-direction: column;

  h1 {
    color: black;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const base = css`
  width: 328px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  gap: 10px;
`