import * as S from './DecorationItem.css';

interface DecorationItemProps {
  imgSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function DecorationItem({ imgSrc, isActive, onClick }: DecorationItemProps) {
  return (
    <img
      className={S.wrapper}
      style={{
        border: isActive ? '1px solid #2294ff' : '0.5px solid #d9d9d9',
      }}
      src={imgSrc}
      onClick={onClick}
    />
  );
}
