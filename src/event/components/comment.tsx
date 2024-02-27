import * as S from './comment.css';

export default function Comment() {
  return (
    <div className={S.wrapper}>
      <textarea className={S.textarea} placeholder="여러분의 의견을 자유롭게 들려주세요" />
      <button className={S.button}>등록하기</button>
    </div>
  );
}
