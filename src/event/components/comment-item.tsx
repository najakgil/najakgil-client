import * as S from './comment-item.css';

interface CommentItemProps {
  comment: string;
  date: string;
  likes: number;
}

export default function CommentItem({ comment, date, likes }: CommentItemProps) {
  return (
    <div className={S.wrapper}>
      <p className={S.comment}>{comment}</p>
      <div className={S.commentButtonBox}>
        <p>{date}</p>
        <div className={S.buttonBox}>
          <button className={S.button}>{likes} 좋아요</button>
          <button className={S.button}>신고</button>
        </div>
      </div>
    </div>
  );
}
