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

// choice
export const choiceContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: center;
  width: 100%;
  padding: 9px 10px 9px 10px;
  grid-gap: 10px;
  background-color: white;
`;

// choice > 캐릭터
// export const Choice = styled.img<{ isActive: boolean }>`
//   width: 100%;
//   aspect-ratio: 1;
//   border-radius: 8px;
//   border: 0.5px solid #d9d9d9;
//   border: ${(props) => (props.isActive ? '1px solid #2294ff' : '0.5px solid #D9D9D9')};
//   cursor: pointer;
// `;
