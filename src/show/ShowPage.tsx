import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

import Header from "../components/Header";
import ToolBar from "./components/ToolBar";
import CharacterPannel from "./components/CharacterPannel";
import BackgroundPannel from "./components/BackgroundPannel";
// import DecoratePannel from "./components/DecoratePannel";

interface ViewerProps {
  src: string;
  backgroundhex: string;
  backgroundimage: string | null;
}

const ShowPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState("character");

  // 캐릭터 > 캐릭터 선택
  const [selectedCharacterItem, setSelectedCharaterItem] = useState(
    "/assets/image/default.png"
  );
  console.log("캐릭터 : ", selectedCharacterItem);

  // 카드 > 배경색
  const [hex, setHex] = useState("#FFF5F5");
  console.log("배경색 : ", hex);
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const { onReady } = useFabricJSEditor();

  // 다운로드
  const cardRef = useRef<HTMLImageElement | null>(null);
  const onDownloadButton = () => {
    const card = cardRef.current;
    if (!card) {
      return;
    }
    const filter = (node: Node) => {
      if (node instanceof Element) {
        return node.tagName !== "BUTTON";
      }
      return true;
    };
    domtoimage.toBlob(card, { filter: filter }).then((blob) => {
      saveAs(blob, "my-precious-gil.png");
    });
  };

  // State to track added text
  // const [addedText, setAddedText] = useState("");
  // console.log(addedText)

  // Function to update addedText state
  // const handleAddText = (text: string) => {
  //   setAddedText(text);
  // };

  return (
    <>
      <Header />
      <MakeWrapper>
        {/* 카드 */}
        <StyledScreen ref={cardRef}>
          <Viewer
            src={selectedCharacterItem}
            backgroundhex={hex}
            backgroundimage={uploadedImage}
            height={"360px"}
          />
          <FabricJSCanvas
            style={{
              width: "360px",
              height: "360px",
              positon: "absolute",
              zIndex: "10",
              top: "46px",
            }}
            onReady={onReady}
          />
        </StyledScreen>
        {/* 다운로드 버튼 */}
        <CompleteButton
          onClick={() => {
            onDownloadButton();
          }}
        >
          <img
            alt="complete"
            src="/assets/icon/download.svg"
            style={{ width: "24px" }}
          />
          <br />
          다운로드
        </CompleteButton>
        {/* 기능 */}
        <ToolBar
          setSelectedTool={setSelectedTool}
          selectedTool={selectedTool}
        />
        {selectedTool === "character" && (
          <CharacterPannel
            selectedCharacterItem={selectedCharacterItem}
            setSelectedCharacterItem={setSelectedCharaterItem}
          />
        )}

        {/* {selectedTool === "decorate" && <DecoratePannel editor={onReady.editor} onAddText={handleAddText} />} */}

        {selectedTool === "background" && (
          <BackgroundPannel
            hex={hex}
            setHex={setHex}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        )}
      </MakeWrapper>
    </>
  );
};

export default ShowPage;

const MakeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 45px;
  margin: 0 auto;
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledScreen = styled.div`
  width: 360px;
  height: 360px;
  position: relative;
  /* background: pink; */
`;

const Viewer = styled.img<ViewerProps>`
  width: 360px;
  height: 360px;
  background: ${(props) => props.backgroundhex};
  background-image: url(${(props) => props.backgroundimage || "none"});
  background-size: cover;
  position: fixed;
`;

const CompleteButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 330px;
  right: 16px;
  background-color: #2294ff;
  border-radius: 50px;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.1);

  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

// const Pannel = styled.div`
//   height: calc(100vh - 506px);

//   background: #f5d442;
// `
