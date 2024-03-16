import * as S from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  variants,
  type = 'button',
  disabled,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = variants === 'primary' ? S.primary : S.secondary;

  return (
    <button type={type} disabled={disabled} className={buttonStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
