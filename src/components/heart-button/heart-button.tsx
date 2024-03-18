interface HeartButtonProps {
    liked: boolean;
    onClick: () => void;
}

export default function HeartButton({liked, onClick}: HeartButtonProps) {
    return (
        <button onClick={onClick}>
            {liked ? <img src='/svg/heart-fill.svg' alt="fill-heart"/> : <img src='/svg/heart.svg' alt="empty-heart"/>}
        </button>
    );
}