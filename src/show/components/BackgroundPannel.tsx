import styled from "styled-components";
import { useState, useRef } from "react";
import { Colorful } from "@uiw/react-color";

interface BackgroundPannelProps {
  hex: string;
  setHex: (tool: string) => void;
  uploadedImage: string;
  setUploadedImage: (tool: string) => void;
}

export default function BackgroundPannel({
  hex,
  setHex,
  uploadedImage,
  setUploadedImage,
}: BackgroundPannelProps) {
  // 배경
  const [selectedBackgroundTool, setSelectedBackgroundTool] =
    useState("background-color");
  console.log("배경 방식 선택 : ", selectedBackgroundTool);

  // 배경 이미지 > 업로드 or 제거
  const imageRef = useRef<HTMLInputElement>(null);
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
  //   const [uploadedImage, setUploadedImage] = useState<string>("");
  console.log("배경 이미지 : ", uploadedImage);

  const handleUploadImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target!.result as string;
      setUploadedImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <BackgroundBox>
      <input
        style={{ display: "none" }}
        ref={imageRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <BackgroundTool>
        <BackgroundToolButton
          isSelectedBackground={selectedBackgroundTool === "background-color"}
          onClick={() => {
            setSelectedBackgroundTool("background-color");
          }}
        >
          배경색
        </BackgroundToolButton>
        <BackgroundToolButton
          isSelectedBackground={selectedBackgroundTool === "background-image"}
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
  );
}

const BackgroundBox = styled.div`
  height: calc(100vh - 510px);
  /* background: purple; */
`;

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
