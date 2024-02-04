import * as S from './button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const theme = {
    primaryColor: 'blue',
    primaryTextColor: 'white',
    secondaryColor: 'gray',
    secondaryTextColor: 'black',
};


export default function Button({onClick, children}: ButtonProps) {
  return (
    <S.Wrapper onClick={onClick} theme={theme}>
      {children}
    </S.Wrapper>
  );
}
