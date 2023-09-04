import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { CharacterToolItemList } from "./CharacterToolItemList";
import { Colorful } from "@uiw/react-color";
// import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CharacterChoiceAtom } from "../recoil/CharacterChoiceAtom";
import { BackgroundColorChoiceAtom } from "../recoil/BackgroundColorChoiceAtom";
import { BackgroundImageChoiceAtom } from "../recoil/BackgroundImageChoiceAtom";
import { fabric } from "fabric";
import { useFabricJSEditor, FabricJSCanvas } from "fabricjs-react";
// import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
// import { PreviewCardAtom } from "../recoil/PreviewCardAtom";
import domtoimage from "dom-to-image";
import Header from "../components/Header";
// import { StickerItemList } from "./StickerItemList";

interface ViewerProps {
  src: string;
  backgroundhex: string;
  backgroundimage: string | null;
}

const MakeUI: React.FC = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  // const navigate = useNavigate();

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
    if (file instanceof File) {
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
  const { editor, onReady } = useFabricJSEditor();

  // 캔버스 > 높이 조절
  useEffect(() => {
    if (editor?.canvas) {
      editor.canvas.setHeight(360);
      editor.canvas.setWidth(360);
    }
  }, [editor?.canvas]);

  // 캔버스 > 도형
  // const onAddCircle = () => {
  //   editor?.addCircle();
  // };
  // const onAddRectangle = () => {
  //   editor?.addRectangle();
  // };

  // 캔버스 > 스티커
  // const onAddImage = () => {
  //   fabric.Image.fromURL(
  //     "https://www.neopoly.de/stylesheets/logo.jpg",
  //     (img) => {
  //       editor.canvas.add(img);
  //     }
  //   );
  // };
  const onAddImage = () => {
    fabric.Image.fromURL(
      "https://www.emojiall.com/images/240/microsoft-teams/1f499.png",
      (img) => {
        editor.canvas.add(img);
      }
    );
    console.log("ddd");
  };

  // 캔버스 > 텍스트
  const [text, setText] = useState("");

  const onAddText = () => {
    editor?.addText(text);
    setText("");
    editor.setFillColor("rgb(255,255,255)");
  };

  // 캔버스 > 펜
  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
  };

  // 캔버스 > 초기화
  const clear = () => {
    editor?.canvas.clear();
  };

  // 캔버스 > 사진
  // const onAddImage = () => {
  //   if (imageRef.current) {
  //     imageRef.current.click();
  //   }
  // };

  // 여기야 여기
  // const onAddImage = () => {
  //   fabric.Image.fromURL(
  //     "https://www.neopoly.de/stylesheets/logo.jpg",
  //     (img) => {
  //       editor.canvas.add(img);
  //     }
  //   );
  // };

  // const onAddImage = (file: File) => {
  //   console.log("이미지 클릭");
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const imageDataUrl = event.target!.result as string;
  //     if (typeof imageDataUrl === "string") {
  //       fabric.Image.fromURL(imageDataUrl, (img) => {
  //         if (editor?.canvas) {
  //           editor.canvas.add(img);
  //         }
  //       });
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const onAddImage = (file: File) => {
  //   console.log("이미지 클릭");
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const imageDataUrl = event.target!.result;
  //     if (typeof imageDataUrl === "string") {
  //       fabric.Image.fromURL(imageDataUrl, (img) => {
  //         if (editor?.canvas) {
  //           editor.canvas.add(img);
  //         }
  //       });
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const onAddImage = () => {
  //   if (uploadedImage) {
  //     fabric.Image.fromURL(uploadedImage, (img) => {
  //       if (editor?.canvas) {
  //         editor.canvas.add(img);
  //       }
  //     });
  //   }
  // };

  // 캔버스 > 지우기
  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  // 완성하기 버튼
  // const cardRef = useRef<HTMLImageElement | null>(null);
  // const [previewCard, setPreviewCard] = useRecoilState(PreviewCardAtom);
  // console.log("미리보기", previewCard);
  // const onCompeleteButton = async () => {
  //   const card = cardRef.current;
  //   if (!card) {
  //     return;
  //   }
  //   const filter = (node: Node) => {
  //     if (node instanceof Element) {
  //       return node.tagName !== "BUTTON";
  //     }
  //     return true;
  //   };
  //   try {
  //     const dataUrl = await domtoimage.toPng(card, { filter });
  //     const img = new Image();
  //     img.src = dataUrl;
  //     console.log("잘 받아왔자나ㅜㅜㅜ", dataUrl);
  //     setPreviewCard(dataUrl);
  //     navigate("/preview");
  //     // document.body.appendChild(img);
  //   } catch (error) {
  //     console.error("oops, something went wrong!", error);
  //   }
  // };

  return (
    <StyledMakeUI>
      <Header />
      <div style={{marginTop:'45px', overflowY: 'scroll'}}>
        <MakeCard ref={cardRef}>
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
            className="sample-canvas"
            onReady={onReady}
          />
        </MakeCard>
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
                  }}
                >
                  텍스트
                </DecorateToolButton>
                {/* <DecorateToolButton
                isSelectedDecorate={selectedDecorateTool === "decorate-image"}
                onClick={() => {
                  setSelectedDecorateTool("decorate-image");
                }}
              >
                사진
              </DecorateToolButton> */}
                <DecorateToolButton
                  isSelectedDecorate={
                    selectedDecorateTool === "decorate-sticker"
                  }
                  onClick={() => {
                    setSelectedDecorateTool("decorate-sticker");
                  }}
                >
                  하트
                </DecorateToolButton>
                <DecorateToolButton
                  isSelectedDecorate={selectedDecorateTool === "decorate-pen"}
                  onClick={() => {
                    setSelectedDecorateTool("decorate-pen");
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
                      <DecorateGuide>
                        원하는 텍스트를 입력해 주세요
                      </DecorateGuide>
                      <input
                        name="text"
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        style={{
                          width: "210px",
                          height: "33px",
                          borderRadius: "3px",
                          border: "1px solid #AFD8FF",
                          paddingLeft: "10px",
                        }}
                      />
                      <button
                        onClick={onAddText}
                        style={{
                          width: "210px",
                          height: "33px",
                          borderRadius: "3px",
                          background: "#AFD8FF",
                          color: "#FFF",
                          textAlign: "center",
                          fontFamily: "Noto Sans",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "140%",
                          marginBottom: "5px",
                        }}
                      >
                        입력
                      </button>
                      {/* <TextChoiceBox>
                      <div>
                        <TextChoiceItem>
                          <TextChoiceTitle>글꼴</TextChoiceTitle>
                          <select name="order" form="myForm">
                            <option value="americano">아메리카노</option>
                            <option value="caffe latte">카페라테</option>
                            <option value="cafe au lait">카페오레</option>
                            <option value="espresso">에스프레소</option>
                          </select>
                        </TextChoiceItem>
                        <TextChoiceItem>
                          <TextChoiceTitle>글자 색깔</TextChoiceTitle>
                          <input type="color" value="#ff0000" />
                        </TextChoiceItem>
                      </div>
                      <div>
                        <TextChoiceItem>
                          <TextChoiceTitle>글자 배경색</TextChoiceTitle>
                          <input type="color" value="#ff0000" />
                        </TextChoiceItem>
                        <TextChoiceItem>
                          <TextChoiceTitle>글씨 외곽선 색상</TextChoiceTitle>
                          <input type="color" value="#ff0000" />
                        </TextChoiceItem>
                      </div>
                      <div>
                        <TextChoiceItem>
                          <TextChoiceTitle>글씨 크기</TextChoiceTitle>
                          <input
                            type="range"
                            id="a"
                            name="ages"
                            min="10"
                            max="60"
                            step="10"
                          />
                          <output name="x" htmlFor="a" />
                        </TextChoiceItem>
                        <TextChoiceItem>
                          <TextChoiceTitle>외곽선 두께</TextChoiceTitle>
                          <input
                            type="range"
                            id="a"
                            name="ages"
                            min="10"
                            max="60"
                            step="10"
                          />
                          <output name="x" htmlFor="a" />
                        </TextChoiceItem>
                      </div>
                    </TextChoiceBox> */}
                    </DecorateTextBox>
                  </DecorateTextContainer>
                )}
                {selectedDecorateTool === "decorate-image" && (
                  <DecorateImageContainer>
                    <DecorateImageBox>
                      <DecorateGuide>원하는 사진을 선택해 주세요</DecorateGuide>
                      <button
                        onClick={() => {
                          onAddImage();
                        }}
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
                        사진 선택하기
                      </button>
                    </DecorateImageBox>
                  </DecorateImageContainer>
                )}
                {selectedDecorateTool === "decorate-sticker" && (
                  <DecorateStickerContainer>
                    <DecorateStickerBox>
                      <DecorateGuide>
                        원하는 스티커를 선택해 주세요
                      </DecorateGuide>
                      <StickerBox>
                        {/* {StickerItemList.map((item, index) => (
                        <img
                          key={index}
                          onClick={onAddImage}
                          src={item.src}
                          style={{ width: "80px" }}
                        />
                      ))} */}
                        <img
                          src="/assets/icon/heart.svg"
                          onClick={() => {
                            onAddImage();
                          }}
                          style={{ width: "80px" }}
                        />
                      </StickerBox>
                    </DecorateStickerBox>
                  </DecorateStickerContainer>
                )}
                {selectedDecorateTool === "decorate-pen" && (
                  <DecoratePenContainer>
                    <DecoratePenBox>
                      <DecorateGuide>원하는 펜을 선택해 주세요</DecorateGuide>
                      <img onClick={toggleDraw} src="/assets/icon/pen.svg" />
                    </DecoratePenBox>
                  </DecoratePenContainer>
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
      </div>
    </StyledMakeUI>
  );
};

const StyledMakeUI = styled.div`
  width: 360px;
  /* height: calc(100vh - 110px); */
`;

const MakeCard = styled.div`
  width: 360px;
  height: 400px;
  /* position: relative; */
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

const Toolbar = styled.div`
  height: 36px;
  position: fixed;
  top: 406px;
  background: white;
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
  height: 243px;
  position: fixed;
  top: 442px;
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
  line-height: 140%;
  background: ${(props) => (props.isselectedcharacter ? "#2294FF" : "white")};
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
  width: 75px;
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

const DecorateGuide = styled.p`
  color: #afd8ff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const DecorateTextContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecorateTextBox = styled.div`
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

// const TextChoiceTitle = styled.div`
//   color: #afd8ff;
//   text-align: center;
//   font-family: Noto Sans;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%;
//   margin-bottom: 5px;
// `;

// const TextChoiceItem = styled.div`
//   width: 100px;
//   height: 50px;
//   /* background: yellow; */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const TextChoiceBox = styled.div`
//   display: flex;
//   gap: 10px;
// `;

const DecorateImageContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecorateImageBox = styled.div`
  width: 230px;
  height: 134px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DecorateStickerContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;

const DecorateStickerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StickerBox = styled.div`
  width: 100%;
  padding: 9px 10px 9px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecoratePenContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: #696141; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecoratePenBox = styled.div`
  width: 230px;
  height: 134px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
