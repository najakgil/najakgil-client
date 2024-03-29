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
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
});

const headerButton = css({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
          <div css={headerButton}>{left}</div>
          <p css={headerTitle}>{title}</p>
          <div css={headerButton}>{right}</div>
        </div>
      </header>
    </>
  );
}
