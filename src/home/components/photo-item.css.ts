import { css } from '@emotion/css';

export const wrapper = css`
  position: relative;
  width: 165px;
  height: 165px;
  border: 0.5px solid #d9d9d9;
  border-radius: 3px;

  img {
    position: relative;
    z-index: 0;
    width: 165px;
    height: 165px;
    border-radius: 3px;
    object-fit: cover;
  }
`;

export const likeContainer = css`
  width: 49px;
  height: 24px;
  margin: 5px;

  position: absolute;
  top: 0;
  left: 0; 
  z-index: 20;
  border-radius: 3px;
  background: rgba(240, 240, 240, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
`;
