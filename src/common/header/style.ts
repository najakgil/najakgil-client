import {css} from '@emotion/css';

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
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;

  p {
    color: #2294FF;
    font-weight: 500;
    font-size: 20px;
  }

  img {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;