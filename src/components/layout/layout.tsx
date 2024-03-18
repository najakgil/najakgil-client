import styled from '@emotion/styled';
import { pretendardFont } from '../../../public/fonts/fonts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Wrapper className={pretendardFont.className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  min-width: 360px;
  max-width: 450px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;
