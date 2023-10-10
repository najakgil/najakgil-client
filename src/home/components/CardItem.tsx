import styled from "styled-components";
import { useState } from "react";
import { baseAxios } from "../../api/baseAxios";
import { getCookie } from "../../util/cookie";

interface CardItemProps {
  src: string;
  photoId: number;
  likeCount: number;
}

export default function CardItem(props: CardItemProps) {
  const [like, setLike] = useState<number[]>([0]);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikeClick = async (index: number) => {
    const userId = getCookie("userId");
    const photoId = props.photoId;

    // 이미 좋아요를 누른 상태면 더 이상 처리하지 않음
    if (liked) {
      return;
    }

    try {
      const response = await baseAxios.post(`/photo/like/${photoId}/${userId}`);
      if (response.status === 200) {
        const updatedLike = [...like];
        updatedLike[index] = response.data.result.likes_cnt;
        setLike(updatedLike);
      }
      console.log("좋아요 클릭 : ", response);
    } catch (error) {
      console.error("좋아요 클릭 > 오류 발생 : ", error);
    }
  };

  return (
    <CardItemBox>
      {like.map((index) => (
        <LikeBox key={index}>
          <button onClick={() => handleLikeClick(index)}>
            <img src="public/assets/icon/heart.svg" alt="Heart Icon" />
          </button>
          <div>{props.likeCount}</div>
        </LikeBox>
      ))}
      <Card src={props.src} />
    </CardItemBox>
  );
}

const CardItemBox = styled.div`
  width: 165px;
  height: 165px;
  position: relative;
`;

const Card = styled.img`
  position: relative;
  z-index: 10;
  width: 165px;
  height: 165px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
  object-fit: cover;
`;

const LikeBox = styled.div`
  position: absolute;
  top: 129px;
  left: 104px;
  width: 49px;
  height: 24px;
  margin: 6px;
  border-radius: 3px;
  background: rgba(240, 240, 240, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
`;
