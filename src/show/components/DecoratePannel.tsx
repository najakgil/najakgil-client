import styled from "styled-components";
import { useState, useEffect } from "react";
// import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
// import { useFabricJSEditor } from "fabricjs-react";
import { FabricJSCanvas } from "fabricjs-react";

interface DecoratePannelProps {
  editor: typeof FabricJSCanvas | null;
  onAddText: (text: string) => void;
}

export default function DecoratePannel({ editor, onAddText }: DecoratePannelProps) {
  // const { editor, onReady } = useFabricJSEditor();
  // const { editor } = useFabricJSEditor();
  // 꾸미기
  const [selectedDecorateTool, setSelectedDecorateTool] =
    useState("decorate-text");
  console.log("꾸미기 방식 선택 : ", selectedDecorateTool);

  // 캔버스
  const [text, setText] = useState("");

  // 캔버스 > 높이 조절
  useEffect(() => {
    if (editor?.canvas) {
      editor.canvas.setHeight(360);
    }
  }, [editor?.canvas]);

  // 캔버스 > 도형
  const onAddCircle = () => {
    editor?.addCircle();
  };
  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  // 캔버스 > 텍스트
  // const onAddText = () => {
  //   editor?.addText(text);
  //   setText("");
  //   onAddText(text);
  // };

  // 캔버스 > 펜
  const toggleDraw = () => {
    if (editor) {
      editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
    }
  };

  // 캔버스 > 초기화
  const clear = () => {
    editor?.canvas.clear();
  };

  // 캔버스 > 사진
  //   const onAddImage = () => {
  //     if (uploadedImage) {
  //       fabric.Image.fromURL(uploadedImage, (img) => {
  //         if (editor?.canvas) {
  //           editor.canvas.add(img);
  //         }
  //       });
  //     }
  //   };

  // 캔버스 > 지우기
  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  return (
    <>
      {/* <FabricJSCanvas
        style={{
          width: "360px",
          height: "360px",
          positon: "absolute",
          zIndex: "10",
          top: "46px",
        }}
        onReady={onReady}
      /> */}
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
          <DecorateToolButton
            isSelectedDecorate={selectedDecorateTool === "decorate-image"}
            onClick={() => {
              setSelectedDecorateTool("decorate-image");
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
                <DecorateGuide>원하는 텍스트를 입력해 주세요</DecorateGuide>
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
                    paddingLeft: "10px",
                  }}
                />
                <button
                  onClick={onAddText}
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
                <div>
                  글꼴 :
                  <select name="order" form="myForm">
                    <option value="americano">아메리카노</option>
                    <option value="caffe latte">카페라테</option>
                    <option value="cafe au lait">카페오레</option>
                    <option value="espresso">에스프레소</option>
                  </select>
                </div>
                <div>
                  글씨 크기
                  <input
                    type="range"
                    id="a"
                    name="ages"
                    min="10"
                    max="60"
                    step="10"
                  />
                  <output name="x" htmlFor="a" />
                </div>
                <div>
                  글자 색깔
                  <input type="color" value="#ff0000" />
                </div>
                <div>
                  글자 배경색
                  <input type="color" value="#ff0000" />
                </div>
                <div>
                  글씨 외곽선 색상
                  <input type="color" value="#ff0000" />
                </div>
                <div>
                  외곽선 두께
                  <input
                    type="range"
                    id="a"
                    name="ages"
                    min="10"
                    max="60"
                    step="10"
                  />
                  <output name="x" htmlFor="a" />
                </div>
                <div>
                  정렬
                  <select name="order" form="myForm">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                  </select>
                </div>
              </DecorateTextBox>
            </DecorateTextContainer>
          )}
          {selectedDecorateTool === "decorate-image" && (
            <DecorateImageContainer>
              <DecorateImageBox>
                <DecorateGuide>원하는 사진을 선택해 주세요</DecorateGuide>
                {/* <button
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
              </button> */}
              </DecorateImageBox>
            </DecorateImageContainer>
          )}
          {selectedDecorateTool === "decorate-shape" && (
            <DecorateShapeContainer>
              <DecorateShapeBox>
                <DecorateGuide>원하는 도형을 선택해 주세요</DecorateGuide>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div
                    onClick={onAddRectangle}
                    style={{
                      border: "1px solid #AFD8FF",
                      background: "#AFD8FF",
                      width: "80px",
                      height: "80px",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Noto Sans",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "140%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    네모
                  </div>
                  <div
                    onClick={onAddCircle}
                    style={{
                      border: "1px solid #AFD8FF",
                      borderRadius: "100px",
                      background: "#AFD8FF",
                      width: "80px",
                      height: "80px",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Noto Sans",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "140%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    동그라미
                  </div>
                </div>
              </DecorateShapeBox>
            </DecorateShapeContainer>
          )}
          {selectedDecorateTool === "decorate-pen" && (
            <DecoratePenContainer>
              <DecoratePenBox>
                <DecorateGuide>원하는 도형을 선택해 주세요</DecorateGuide>
                <img onClick={toggleDraw} src="/assets/icon/pen.svg" />
              </DecoratePenBox>
            </DecoratePenContainer>
          )}
        </DecorateContainer>
      </DecorateBox>
    </>
  );
}

const DecorateBox = styled.div`
  height: calc(100vh - 506px);
  /* background: #f5d442; */
`;

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

const DecorateGuide = styled.p`
  color: #afd8ff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 10px;
`;

const DecorateTextContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecorateTextBox = styled.div`
  width: 230px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

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

const DecorateShapeContainer = styled.div`
  height: calc(100vh - 559px);
  /* background: olive; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecorateShapeBox = styled.div`
  width: 230px;
  height: 134px;
  /* background: red; */
  display: flex;
  flex-direction: column;
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
