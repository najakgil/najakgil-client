import * as S from './photo-item.css';
import { postLikes } from '../../../api/postLikes';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from '../../../util/cookie';

interface PhotoItemProps {
  imgUrl: string;
  likes: number;
  photo_id: number;
}

export default function PhotoItem({ imgUrl, likes, photo_id }: PhotoItemProps) {
  // 유저 아이디 가져오기
  const userId = Number(getCookie('userId'));

  // 차트 사진 좋아요
  const chartPhotoLikeData = useQuery({
    queryKey: ['postLikes'],
    queryFn: async () => await postLikes(photo_id, userId),
  });

  return (
    <div className={S.wrapper} onClick={() => chartPhotoLikeData.refetch()}>
      <img src={imgUrl} alt="photo-item" />
      <div className={S.likeContainer}>
        <img src="/assets/svg/heart.svg" alt="heart" />
        <p>{likes}</p>
      </div>
    </div>
  );
}
