import { css } from '@emotion/react';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  isActiveTag?: boolean;
  label: string;
  onClick?: () => void;
}

export default function Tag({ label, isActiveTag = false, onClick }: TagProps) {
  const containerStyle = isActiveTag ? activeCss : inactiveCss;

  return (
    <div css={[containerCss, containerStyle]} onClick={onClick}>
      {label}
    </div>
  );
}

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '15px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  borderRadius: '3px',
  cursor: 'pointer',
  border: '1px solid #2294ff',
});

const activeCss = css({
  backgroundColor: '#2294ff',
  color: 'white',
  fontWeight: 'bold',
});

const inactiveCss = css({
  backgroundColor: 'white',
  color: '#2294ff',
  fontWeight: 'normal',
});
