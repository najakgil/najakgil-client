import * as S from './style.ts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
