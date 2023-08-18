import React, { useState, useRef } from "react";
import styled from "styled-components";
import { CharacterToolItemList } from "./CharacterToolItemList";
import { Colorful } from "@uiw/react-color";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CharacterChoiceAtom } from "../recoil/CharacterChoiceAtom";
import { BackgroundColorChoiceAtom } from "../recoil/BackgroundColorChoiceAtom";
import { BackgroundImageChoiceAtom } from "../recoil/BackgroundImageChoiceAtom";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

interface ViewerProps {
  src: string;
  backgroundhex: string;
  backgroundimage: string | null;
}

const MakeUI: React.FC = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // 캐릭터 & 배경
  const [selectedTool, setSelectedTool] = useState("character");
  // 캐릭터
  const [selectedCharacterTool, setSelectedCharacterTool] = useState(
    CharacterToolItemList[0]
  );
  console.log("캐릭터 버전 선택 : ", selectedCharacterTool);
  // 캐릭터 > 캐릭터 선택
  const [selectedCharacterItem, setSelectedCharacterItem] =
    useRecoilState(CharacterChoiceAtom);
  console.log("캐릭터 : ", selectedCharacterItem);

  // 꾸미기
  const [selectedDecorateTool, setSelectedDecorateTool] =
    useState("decorate-text");
  console.log("꾸미기 방식 선택 : ", selectedDecorateTool);

  // 배경
  const [selectedBackgroundTool, setSelectedBackgroundTool] =
    useState("background-color");
  console.log("배경 방식 선택 : ", selectedBackgroundTool);

  // 카드 > 배경색
  const [hex, setHex] = useRecoilState(BackgroundColorChoiceAtom);
  console.log("배경색 : ", hex);

  // 배경 이미지 > 업로드 or 제거
  const [upload, setUpload] = useState(true);

  const handleUploadRemoveClick = () => {
    console.log("클릭 성공");
    if (upload) {
      if (imageRef.current) {
        imageRef.current.click();
      }
      setUpload(false);
    } else {
      setUpload(true);
      setUploadedImage("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleUploadImage(file);
    }
  };

  // 카드 > 배경 이미지
  const [uploadedImage, setUploadedImage] = useRecoilState(
    BackgroundImageChoiceAtom
  );
  console.log("배경 이미지 : ", uploadedImage);

  const handleUploadImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target!.result as string;
      setUploadedImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  // 캔버스
  const [text, setText] = useState("");
  const { editor, onReady } = useFabricJSEditor();

  // const onAddCircle = () => {
  //   editor?.addCircle();
  // };
  // const onAddRectangle = () => {
  //   editor?.addRectangle();
  // };
  const onAddText = () => {
    editor?.addText(text);
    setText("");
  };

  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
  };

  const clear = () => {
    editor.canvas.clear();
  };

  const onAddImage = () => {
    fabric.Image.fromURL(
      "https://www.neopoly.de/stylesheets/logo.jpg",
      (img) => {
        editor.canvas.add(img);
      }
    );
  };

  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  return (
    <StyledMakeUI>
      <div style={{ width: "360px", height: "360px", position: "relative" }}>
        <Viewer
          src={selectedCharacterItem}
          backgroundhex={hex}
          backgroundimage={uploadedImage}
        />
        <FabricJSCanvas
          style={{
            width: "360px",
            height: "360px",
            positon: "fixed",
            zIndex: "10",
            top: "46px",
          }}
          className="sample-canvas"
          onReady={onReady}
        />
      </div>
      <CompleteButton
        onClick={() => {
          navigate("/preview");
        }}
      >
        <img
          alt="complete"
          src="/assets/icon/complete.svg"
          style={{ width: "24px" }}
        />
        <br />
        완성하기
      </CompleteButton>
      <input
        style={{ display: "none" }}
        ref={imageRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {/* 총장님 캐릭터 보이는 화면 */}
      <Toolbar>
        <ToolButton
          isselected={selectedTool === "character"}
          onClick={() => setSelectedTool("character")}
        >
          캐릭터
        </ToolButton>
        <ToolButton
          isselected={selectedTool === "decorate"}
          onClick={() => setSelectedTool("decorate")}
        >
          꾸미기
        </ToolButton>
        <ToolButton
          isselected={selectedTool === "background"}
          onClick={() => setSelectedTool("background")}
        >
          배경
        </ToolButton>
      </Toolbar>
      <ToolChoiceBox>
        {/* character */}
        {selectedTool === "character" && (
          <CharacterBox>
            <ToolBox>
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
            </ToolBox>
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
        )}
        {/* decorate */}
        {selectedTool === "decorate" && (
          <DecorateBox>
            <DecorateTool>
              <DecorateToolButton
                isSelectedDecorate={selectedDecorateTool === "decorate-text"}
                onClick={() => {
                  setSelectedDecorateTool("decorate-text");
                  onAddText();
                }}
              >
                텍스트
              </DecorateToolButton>
              <DecorateToolButton
                isSelectedDecorate={selectedDecorateTool === "decorate-image"}
                onClick={() => {
                  setSelectedDecorateTool("decorate-image");
                  onAddImage();
                }}
              >
                사진
              </DecorateToolButton>
              <DecorateToolButton
                isSelectedDecorate={selectedDecorateTool === "decorate-shape"}
                onClick={() => {
                  setSelectedDecorateTool("decorate-shape");
                }}
              >
                도형
              </DecorateToolButton>
              <DecorateToolButton
                isSelectedDecorate={selectedDecorateTool === "decorate-pen"}
                onClick={() => {
                  setSelectedDecorateTool("decorate-pen");
                  toggleDraw();
                }}
              >
                펜
              </DecorateToolButton>
              <DecorateDeleteButton onClick={removeSelectedObject}>
                지우기
              </DecorateDeleteButton>
              <DecorateClearButton onClick={clear}>
                <img alt="clear" src="/assets/icon/clear.svg" />
              </DecorateClearButton>
            </DecorateTool>
            <DecorateContainer>
              {selectedDecorateTool === "decorate-text" && (
                <DecorateTextContainer>
                  <DecorateTextBox>
                    <div
                      style={{
                        color: "#AFD8FF",
                        textAlign: "center",
                        fontFamily: "Noto Sans",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "140%",
                      }}
                    >
                      원하는 텍스트를 입력해 주세요
                    </div>
                    <input
                      name="text"
                      type="text"
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      style={{
                        width: "210px",
                        height: "38px",
                        borderRadius: "3px",
                        border: "1px solid #AFD8FF",
                      }}
                    />
                    <button
                      style={{
                        width: "210px",
                        height: "38px",
                        borderRadius: "3px",
                        background: "#AFD8FF",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Noto Sans",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "140%",
                      }}
                    >
                      입력
                    </button>
                  </DecorateTextBox>
                </DecorateTextContainer>
              )}
              {selectedDecorateTool === "decorate-image" && (
                <DecorateImageContainer></DecorateImageContainer>
              )}
              {selectedDecorateTool === "decorate-shate" && (
                <DecorateShapeContainer></DecorateShapeContainer>
              )}
              {selectedDecorateTool === "decorate-pen" && (
                <DecoratePenContainer></DecoratePenContainer>
              )}
            </DecorateContainer>
          </DecorateBox>
        )}
        {/* background */}
        {selectedTool === "background" && (
          <BackgroundBox>
            <BackgroundTool>
              <BackgroundToolButton
                isSelectedBackground={
                  selectedBackgroundTool === "background-color"
                }
                onClick={() => {
                  setSelectedBackgroundTool("background-color");
                }}
              >
                배경색
              </BackgroundToolButton>
              <BackgroundToolButton
                isSelectedBackground={
                  selectedBackgroundTool === "background-image"
                }
                onClick={() => {
                  setSelectedBackgroundTool("background-image");
                }}
              >
                배경 이미지
              </BackgroundToolButton>
            </BackgroundTool>
            <BackgroundContainer>
              {selectedBackgroundTool === "background-color" && (
                <BackgroundColorContainer>
                  <Colorful
                    color={hex}
                    onChange={(color) => {
                      setHex(color.hex);
                    }}
                  />
                </BackgroundColorContainer>
              )}
              {selectedBackgroundTool === "background-image" && (
                <BackgroundImageContainer>
                  <UploadRemoveButton onClick={handleUploadRemoveClick}>
                    {upload === true ? (
                      <>
                        <img alt="upload" src="/assets/icon/upload.svg" />
                        <p>배경 이미지 업로드하기</p>
                      </>
                    ) : (
                      <>
                        <img alt="remove" src="/assets/icon/remove.svg" />
                        <p>배경 이미지 제거하기</p>
                      </>
                    )}
                  </UploadRemoveButton>
                </BackgroundImageContainer>
              )}
            </BackgroundContainer>
          </BackgroundBox>
        )}
      </ToolChoiceBox>
    </StyledMakeUI>
  );
};

const StyledMakeUI = styled.div`
  height: calc(100vh - 110px);
`;

const Viewer = styled.img<ViewerProps>`
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
  color: #fff;
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

const Toolbar = styled.div`
  height: 36px;
`;

const ToolButton = styled.button<{ isselected: boolean }>`
  width: 120px;
  height: 36px;
  border-bottom: ${(props) =>
    props.isselected ? "1.5px solid #2294FF" : "1px solid #d9d9d9"};
  color: ${(props) => (props.isselected ? "#2294FF" : "#D9D9D9")};
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => (props.isselected ? 700 : 400)};
  line-height: 140%; /* 16.8px */
`;

const ToolChoiceBox = styled.div`
  height: calc(100vh - 506px);
  /* background: yellow; */
`;

const CharacterBox = styled.div`
  height: calc(100vh - 506px);
  /* background: green; */
`;

const DecorateBox = styled.div`
  height: calc(100vh - 506px);
  /* background: #f5d442; */
`;

const BackgroundBox = styled.div`
  height: calc(100vh - 510px);
  /* background: purple; */
`;

// character

const ToolBox = styled.div`
  width: 360px;
  height: 48px;
  /* background: brown; */
  overflow-x: scroll;
  padding: 9.5px 12px 9.5px 12px;
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
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  background: ${(props) =>
    props.isselectedcharacter ? "#2294FF" : "transparent"};
`;

const CharacterItemContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
  padding: 9px 10px 9px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const CharacterItem = styled.img<{ isselecteditem: boolean }>`
  width: 110px;
  height: 110px;
  border-radius: 8px;
  border: 0.5px solid #d9d9d9;
  border: ${(props) =>
    props.isselecteditem ? "1px solid #2294ff" : "0.5px solid #D9D9D9"};
  cursor: pointer;
`;

// decorate

const DecorateTool = styled.div`
  width: 360px;
  height: 48px;
  /* background: brown; */
  padding: 6px 11px 6px 11px;
  display: flex;
  gap: 7px;
  border-bottom: 8px solid #f0f0f0;
`;

const DecorateToolButton = styled.button<{ isSelectedDecorate: boolean }>`
  width: 55px;
  height: 29px;
  border-radius: 3px;
  border: ${(props) =>
    props.isSelectedDecorate ? "0.5px solid white" : "1px solid #2294ff"};
  background: ${(props) => (props.isSelectedDecorate ? "#2294ff" : "white")};

  color: ${(props) => (props.isSelectedDecorate ? "white" : "#2294ff")};
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

const DecorateDeleteButton = styled.button`
  width: 55px;
  height: 29px;
  border-radius: 3px;
  background: #afd8ff;
  color: white;
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const DecorateClearButton = styled.button`
  width: 29px;
  height: 29px;
  border-radius: 3px;
  background: #afd8ff;
`;

const DecorateContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
`;

const DecorateTextContainer = styled.div`
  height: calc(100vh - 559px);
  background: blue;
`;

const DecorateTextBox = styled.div`
  width: 230px;
  height: 134px;
`;

const DecorateImageContainer = styled.div`
  height: calc(100vh - 559px);
  background: olive;
`;

const DecorateShapeContainer = styled.div`
  height: calc(100vh - 559px);
  background: olive;
`;

const DecoratePenContainer = styled.div`
  height: calc(100vh - 559px);
  background: #696141;
`;

// background

const BackgroundTool = styled.div`
  width: 360px;
  height: 48px;
  /* background: brown; */
  padding: 6px 12px 6px 12px;
  display: flex;
  gap: 10px;
  border-bottom: 8px solid #f0f0f0;
`;

const BackgroundToolButton = styled.button<{ isSelectedBackground: boolean }>`
  width: 163px;
  height: 29px;
  border-radius: 3px;
  border: ${(props) =>
    props.isSelectedBackground ? "0.5px solid white" : "1px solid #2294ff"};
  background: ${(props) => (props.isSelectedBackground ? "#2294ff" : "white")};

  color: ${(props) => (props.isSelectedBackground ? "white" : "#2294ff")};
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

const BackgroundContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
`;

const BackgroundColorContainer = styled.div`
  height: calc(100vh - 559px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: olive; */
`;

const BackgroundImageContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: #fcba03; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadRemoveButton = styled.div`
  width: 230px;
  height: 160px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  cursor: pointer;

  color: #afd8ff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export default MakeUI;