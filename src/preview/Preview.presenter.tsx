// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { CharacterChoiceAtom } from "../recoil/CharacterChoiceAtom";
// import { BackgroundColorChoiceAtom } from "../recoil/BackgroundColorChoiceAtom";
// import { BackgroundImageChoiceAtom } from "../recoil/BackgroundImageChoiceAtom";
// import domtoimage from "dom-to-image";
// import { saveAs } from "file-saver";
// import { useRef } from "react";

// interface PreviewViewerProps {
//   src: string;
//   backgroundhex: string;
//   backgroundimage: string | null;
// }

// const PreviewUI: React.FC = () => {
//   // Recoil
//   const characterChoice = useRecoilValue(CharacterChoiceAtom);
//   const backgroundColorChoice = useRecoilValue(BackgroundColorChoiceAtom);
//   const backgroundImageChoice = useRecoilValue(BackgroundImageChoiceAtom);

// // 다운로드
// const cardRef = useRef<HTMLImageElement | null>(null);
// const onDownloadButton = () => {
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
//   domtoimage.toBlob(card, { filter: filter }).then((blob) => {
//     saveAs(blob, "my-gachon-president.png");
//   });
// };

//   const navigate = useNavigate();

//   return (
//     <StyledPreview>
//       <PreviewViewer
//         src={characterChoice}
//         backgroundhex={backgroundColorChoice}
//         backgroundimage={backgroundImageChoice}
//         ref={cardRef}
//       />
//       <PreviewBox>
//         <PrevButton
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           <img alt="prev-button" src="/assets/icon/prev-button.svg" />
//           수정하기
//         </PrevButton>
//         <PreviewGuideBox>
//           <PreviewGuide>
//             <p
//               style={{
//                 color: "#000",
//                 textAlign: "center",
//                 fontFamily: "Noto Sans",
//                 fontSize: "16px",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 lineHeight: "140%",
//               }}
//             >
//               나만의 총장님을 완성했어요!
//             </p>
//             <p
//               style={{
//                 color: "#000",
//                 textAlign: "center",
//                 fontFamily: "Noto Sans",
//                 fontSize: "14px",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 lineHeight: "140%",
//               }}
//             >
//               이제 나만의 총장님을 소장해 보세요
//             </p>
//           </PreviewGuide>
//           <PreviewGuideButtonContainer>
//             <BoastButton>자랑하기</BoastButton>
//             <DownloadButton
//               onClick={() => {
//                 onDownloadButton();
//               }}
//             >
//               저장하기
//             </DownloadButton>
//           </PreviewGuideButtonContainer>
//         </PreviewGuideBox>
//       </PreviewBox>
//     </StyledPreview>
//   );
// };

// const StyledPreview = styled.div`
//   height: calc(100vh - 110px);
// `;

// const PreviewViewer = styled.img<PreviewViewerProps>`
//   height: 360px;
//   background: ${(props) => props.backgroundhex};
//   background-image: url(${(props) => props.backgroundimage || "none"});
//   background-size: cover;
// `;

// const PreviewBox = styled.div`
//   height: calc(100vh - 470px);
//   padding: 10px;
//   /* background: pink; */
// `;

// const PrevButton = styled.button`
//   width: 80px;
//   height: 30px;
//   padding: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;
//   left: 0;
//   margin-bottom: 30px;

//   color: #aeaeae;
//   text-align: center;
//   font-family: Noto Sans;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
// `;

// const PreviewGuideBox = styled.div`
//   height: calc(100vh - 533px);
//   /* background: yellow; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PreviewGuide = styled.div`
//   width: 224px;
//   height: 43px;
//   /* background: orange; */
//   margin-bottom: 20px;
// `;

// const PreviewGuideButtonContainer = styled.div`
//   width: 328px;
//   height: 114px;
//   /* background: green; */
// `;

// const BoastButton = styled.button`
//   width: 328px;
//   height: 52px;
//   border-radius: 8px;
//   background: #2294ff;
//   margin-bottom: 10px;

//   color: #fff;
//   text-align: center;
//   font-family: Noto Sans;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 140%;
// `;

// const DownloadButton = styled.button`
//   width: 328px;
//   height: 52px;
//   border-radius: 8px;
//   border: 1px solid #2294ff;

//   color: #2294ff;
//   text-align: center;
//   font-family: Noto Sans;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 140%;
// `;

// export default PreviewUI;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PreviewCardAtom } from "../recoil/PreviewCardAtom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";
import Header from "../components/Header";

// interface PreviewViewerProps {
//   src: string;
//   backgroundhex: string;
//   backgroundimage: string | null;
// }

const PreviewUI: React.FC = () => {
  const navigate = useNavigate();
  const previewCard = useRecoilValue(PreviewCardAtom);

  // // 다운로드
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
    domtoimage
      .toBlob(card, {
        filter: filter,
        width: card.clientWidth * 5,
        height: card.clientHeight * 5,
        style: {
          transform: "scale(2)",
          "transform-origin": "50% 50%",
        },
      })
      .then((blob) => {
        saveAs(blob, "my-gachon-president.png");
      });
  };

  return (
    <StyledPreview>
      <Header />
      <div style={{ marginTop: "45px" }}>
        <img
          src={previewCard}
          ref={cardRef}
          // style={{ width: "360px", height: "454px", objectFit: "scale-down" }}
          style={{ width: "360px", height: "360px", objectFit: "scale-down" }}
        />
        <PreviewBox>
          <PrevButton
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="prev-button" src="/assets/icon/prev-button.svg" />
            수정하기
          </PrevButton>
          <PreviewGuideBox>
            <PreviewGuide>
              <p
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "140%",
                }}
              >
                나만의 총장님을 완성했어요!
              </p>
              <p
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Noto Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%",
                }}
              >
                이제 나만의 총장님을 소장해 보세요
              </p>
            </PreviewGuide>
            <PreviewGuideButtonContainer>
              <BoastButton>자랑하기</BoastButton>
              <DownloadButton
                onClick={() => {
                  onDownloadButton();
                }}
              >
                저장하기
              </DownloadButton>
            </PreviewGuideButtonContainer>
          </PreviewGuideBox>
        </PreviewBox>
      </div>
    </StyledPreview>
  );
};

const StyledPreview = styled.div`
  height: calc(100vh - 110px);
`;

// const PreviewViewer = styled.img<PreviewViewerProps>`
//   height: 360px;
//   background: ${(props) => props.backgroundhex};
//   background-image: url(${(props) => props.backgroundimage || "none"});
//   background-size: cover;
// `;

const PreviewBox = styled.div`
  height: calc(100vh - 470px);
  padding: 10px;
  /* background: pink; */
`;

const PrevButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  left: 0;
  margin-bottom: 30px;

  color: #aeaeae;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const PreviewGuideBox = styled.div`
  height: calc(100vh - 533px);
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PreviewGuide = styled.div`
  width: 224px;
  height: 43px;
  /* background: orange; */
  margin-bottom: 20px;
`;

const PreviewGuideButtonContainer = styled.div`
  width: 328px;
  height: 114px;
  /* background: green; */
`;

const BoastButton = styled.button`
  width: 328px;
  height: 52px;
  border-radius: 8px;
  background: #2294ff;
  margin-bottom: 10px;

  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const DownloadButton = styled.button`
  width: 328px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #2294ff;

  color: #2294ff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export default PreviewUI;
