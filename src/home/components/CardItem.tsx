import styled from "styled-components";
import { useState } from "react";

interface CardItemProps {
  src: string;
}

export default function CardItem(props: CardItemProps) {
  const [like, setLike] = useState([0]);

  const handleLikeClick = (index: number) => {
    const likeCnt = [...like];
    likeCnt[index]++;
    setLike(likeCnt);
  };

  // 서버 연동 시
  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await axios.get(...)
  //     if (res.data.type === 'liked') setLike(true)
  //   }
  //   fetchData()
  // }, []);
  
  // const toggleLike = async (e) => {
  //   const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
  //   setLike(!like)
  // }

  return (
    <CardItemBox>
      {like.map((count, index) => (
        <LikeBox key={index}>
          <button onClick={() => handleLikeClick(index)}>
            <img src="public/assets/icon/heart.svg" alt="Heart Icon" />
          </button>
          <div>{count}</div>
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
  /* background: red; */
  /* background-image: url("/assets/image/푸바오.jpeg"); */
`;

const Card = styled.img`
  position: relative;
  z-index: 10; 
  width: 165px;
  height: 165px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
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