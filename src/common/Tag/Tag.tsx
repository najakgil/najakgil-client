import * as S from './Tag.css';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  key: number;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Tag({ key, children, isActive, onClick, ...props }: TagProps) {
  const tagStyle = isActive ? S.active : S.inactive;
  return (
    <div key={key} className={tagStyle} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
