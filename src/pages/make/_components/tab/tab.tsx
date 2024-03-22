import styled from '@emotion/styled';

const TabContainer = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid #e5e5e5;
  color: ${({ isActive }) => (isActive ? '#2294FF' : '#AEAEAE')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-bottom: ${({ isActive }) => (isActive ? '1.5px solid #2294FF' : '1px solid #e5e5e5')};
`;

interface TabProps {
  isActiveTab?: boolean;
  label: string;
  onClick: () => void;
}

export default function Tab({ isActiveTab, label, onClick }: TabProps) {
  return (
    <TabContainer isActive={Boolean(isActiveTab)} onClick={onClick}>
      {label}
    </TabContainer>
  );
}
