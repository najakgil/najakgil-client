import * as S from './style.ts';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
}
