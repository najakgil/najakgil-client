/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

const base = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '17px',
  fontWeight: '600',
  borderRadius: '8px',
  width: '100%',
  height: '52px',
  boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
  '&:disabled': {
    backgroundColor: '#D9D9D9',
    color: 'white',
    cursor: 'default',
  },
});

const variantsCss = {
  primary: css({
    backgroundColor: '#2294FF',
    color: 'white',
  }),
  secondary: css({
    backgroundColor: '#FFFFFF',
    border: '1px solid #2294FF',
    color: '#2294FF',
  }),
};

const Button: React.FC<ButtonProps> = ({
  variants,
  type = 'button',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const buttonStyle = [base, variantsCss[variants]];

  return (
    <button type={type} css={buttonStyle} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
