import { css } from '@emotion/css';

export const tagContainer = css`
  width: 100%;
  padding: 10px 3px;
  display: flex;
  gap: 3px;
  background-color: white;
  border-bottom: 8px solid #e5e5e5;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;


