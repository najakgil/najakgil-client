import styled from '@emotion/styled';

// const baseStyle = css({
//   display: 'flex',
//   flexDirection: 'column',
//   width: '100%',
//   height: '100%',
//   padding: '15px 0px',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: '12px',
//   borderRadius: '3px',
//   cursor: 'pointer',
//   color: '#2294ff',
//   backgroundColor: 'white',
//   fontWeight: 'normal',
//   border: '1px solid #2294ff',
// });

// const activeStyle = css({
//   ...baseStyle,
//   backgroundColor: '#2294ff',
//   color: 'white',
//   fontWeight: 'bold',
// });

const TagContainer = styled.div<{ isActiveTag: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  color: ${(isActiveTag) => (isActiveTag ? 'white' : '#2294ff')};
  background-color: ${(isActiveTag) => (isActiveTag ? '#2294ff' : 'white')};
  font-weight: ${(isActiveTag) => (isActiveTag ? 'bold' : 'normal')};
  border: 1px solid #2294ff;
`;

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  isActiveTag?: boolean;
  label: string
  onClick?: () => void;
}

export default function Tag({ label, isActiveTag, onClick }: TagProps) {
  return (
    <TagContainer isActiveTag={Boolean(isActiveTag)} onClick={onClick} >
      {label}
    </TagContainer>
  );
}
