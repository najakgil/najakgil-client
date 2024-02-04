import * as S from './style.ts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      <div style={{ height: '45px' }} />
      {children}
      <div style={{ height: '66px' }} />
    </S.Wrapper>
  );
}
