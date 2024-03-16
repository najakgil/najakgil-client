import * as S from './Header.css';
import { ReactNode } from 'react';

interface HeaderProps {
  left: ReactNode;
  title: string;
  right: ReactNode;
}

export default function Header({ left, title, right }: HeaderProps) {
  return (
    <>
      <header className={S.wrapper}>
        <div className={S.container}>
          <button className={S.headerButton}>{left}</button>
          <p className={S.headerTitle}>{title}</p>
          <button className={S.headerButton}>{right}</button>
        </div>
      </header>
    </>
  );
}
