/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

const wrapper = css({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 0,
});

const container = css({
  width: '100%',
  minWidth: '360px',
  maxWidth: '450px',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
});

const headerButton = css({
  width: '16px',
  flex: 1,
});

const headerTitle = css({
  flex: 3,
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 500,
  color: '#2294ff',
});

interface HeaderProps {
  left: ReactNode;
  title: string;
  right: ReactNode;
}

export default function Header({ left, title, right }: HeaderProps) {
  return (
    <>
      <header css={wrapper}>
        <div css={container}>
          <button css={headerButton}>{left}</button>
          <p css={headerTitle}>{title}</p>
          <button css={headerButton}>{right}</button>
        </div>
      </header>
    </>
  );
}
