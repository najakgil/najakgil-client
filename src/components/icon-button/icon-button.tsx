interface IconButtonProps {
  onClick: () => void;
  imgSrc: string;
  width: number;
}

export default function IconButton({ onClick, imgSrc, width }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={imgSrc} alt="icon-button" style={{ width }} />
    </button>
  );
}
