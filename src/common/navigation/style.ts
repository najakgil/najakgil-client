import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 360px;
  max-width: 450px;
  height: 66px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 1px solid #e5e5e5;
`;

export const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) => (props.isActive ? '#2294FF' : '#AEAEAE')};
`;
