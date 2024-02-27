import Header from '../common/header/header';
import Comment from './components/comment';
import * as S from './style.css';
import { CommentData } from './components/comment-data';
import CommentItem from './components/comment-item';
import Filter from './components/filter';

const Event = () => {
  return (
    <>
      <Header headerTitle="이벤트" />
      <div style={{ width: '360px', height: ' 360px', background: 'pink' }} />
      <div className={S.base}>
        <Comment />
        <div
          style={{
            width: '360px',
            paddingLeft: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Filter />
        </div>
        {CommentData.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment.comment}
            date={comment.date}
            likes={comment.likes}
          />
        ))}
      </div>
    </>
  );
};

export default Event;
