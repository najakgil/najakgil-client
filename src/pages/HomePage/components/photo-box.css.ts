import { css } from '@emotion/css';

export const wrapper = css`
  padding: 16px;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
`;

export const filterButtonContainer = css`
  width: 80px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
  }
`;

export const filterButton = css`
  font-weight: 500;
  font-size: 16px;
`;

export const filterList = css`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 54px;
  border-radius: 8px;
  padding: 8px;
  gap: 3px;
  border: 1px solid #d9d9d9;
`;
export const photoBox = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 640px;
  padding: 10px;
  margin: 0;
  gap: 10px;
  overflow-y: scroll;
`;
