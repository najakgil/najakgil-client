import styled from "styled-components";
import { CharacterToolItemList } from "./CharacterToolItemList";
import { useState } from "react";

interface CharacterPanelProps {
  selectedCharacterItem: string;
  setSelectedCharacterItem: (tool: string) => void;
}

export default function CharacterPanel({
  selectedCharacterItem, setSelectedCharacterItem
}: CharacterPanelProps) {
  // 캐릭터
  const [selectedCharacterTool, setSelectedCharacterTool] = useState(CharacterToolItemList[0]);
  console.log("캐릭터 버전 선택 : ", selectedCharacterTool);

  return (
    <CharacterBox>
      <CharacterTool>
        {CharacterToolItemList.map((item, index) => (
          <CharacterToolItem
            key={index}
            isselectedcharacter={selectedCharacterTool === item}
            onClick={() => {
              setSelectedCharacterTool(item);
            }}
          >
            {item.name}
          </CharacterToolItem>
        ))}
      </CharacterTool>
      <CharacterItemContainer>
        {selectedCharacterTool.decorateitemlist.map((src, index) => (
          <CharacterItem
            key={index}
            src={src}
            onClick={() => {
              setSelectedCharacterItem(src);
            }}
            isselecteditem={selectedCharacterItem === src}
          />
        ))}
      </CharacterItemContainer>
    </CharacterBox>
  );
}

const CharacterBox = styled.div`
  height: calc(100vh - 506px);
`;

const CharacterTool = styled.div`
  width: 360px;
  height: 48px;
  overflow-x: scroll;
  padding: 9.5px 12px;
  display: flex;
  gap: 10px;
  border-bottom: 8px solid #f0f0f0;
`;

const CharacterToolItem = styled.button<{ isselectedcharacter: boolean }>`
  width: 57px;
  height: 21px;
  border-radius: 3px;
  border: 0.5px solid #2294ff;
  color: ${(props) => (props.isselectedcharacter ? "#ffffff" : "#2294ff")};
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  background: ${(props) =>
    props.isselectedcharacter ? "#2294FF" : "transparent"};
`;

const CharacterItemContainer = styled.div`
  height: calc(100vh - 559px);
  padding: 9px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const CharacterItem = styled.img<{ isselecteditem: boolean }>`
  width: 110px;
  height: 110px;
  border-radius: 8px;
  border: ${(props) =>
    props.isselecteditem ? "1px solid #2294ff" : "0.5px solid #d9d9d9"};
  cursor: pointer;
`;
