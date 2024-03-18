import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: yellow;
  overflow: hidden;
`;

// tab
export const TabContainer = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
  justify-content: center;
  background-color: white;
`;

export const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  /* width: 120px; */
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: ${(props) => (props.isActive ? '#2294FF' : '#AEAEAE')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.isActive ? '1.5px solid #2294FF' : '1px solid #e5e5e5')};
`;

// tag
export const TagContainer = styled.div`
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

export const Tag = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 12px;
  border-radius: 3px;
  padding: 2px 4px;
  color: ${(props) => (props.isActive ? 'white' : '#2294FF')};
  background-color: ${(props) => (props.isActive ? '#2294FF' : 'white')};
  border: ${(props) => (props.isActive ? 'unset' : '1px solid #2294FF')};
`;

// choice
export const ChoiceContainer = styled.div`
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
export const Choice = styled.img<{ isActive: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 0.5px solid #d9d9d9;
  border: ${(props) => (props.isActive ? '1px solid #2294ff' : '0.5px solid #D9D9D9')};
  cursor: pointer;
`;
