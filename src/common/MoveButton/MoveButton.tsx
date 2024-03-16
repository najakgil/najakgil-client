interface MoveButtonProps {
  onClick: () => void;
  imgSrc: string;
  width: number;
}

export default function MoveButton({ onClick, imgSrc, width }: MoveButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={imgSrc} alt="move-button" style={{width}} />
    </button>
  );
}
