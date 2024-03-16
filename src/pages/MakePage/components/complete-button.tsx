import * as S from './complete-button.style';

interface CompleteButtonProps {
  onClick: () => void;
}

export default function CompleteButton({ onClick }: CompleteButtonProps) {
  return (
    <S.Wrapper onClick={onClick}>
      <img src="../assets/svg/complete.svg" alt="complete" />
      <p>완성하기</p>
    </S.Wrapper>
  );
}
