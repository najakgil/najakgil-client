import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PreviewCardAtom } from "../recoil/PreviewCardAtom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import Header from "../components/Header";
import ModalOverlay from "../components/ModalOverlay";
import Modal from "../components/Modal";
import { getCookie } from "../util/cookie";
import SignInModal from "./components/SignInModal";
import { baseAxios } from "../api/baseAxios";

const PreviewUI: React.FC = () => {
  const navigate = useNavigate();
  const previewCard = useRecoilValue(PreviewCardAtom);

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

  const onUploadButton = async () => {
    const userId = getCookie("userId");

    const dataURLtoFile = (dataurl: string, fileName: string) => {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)?.[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], fileName, { type: mime });
    };

    const formData = new FormData();

    formData.append("image", dataURLtoFile(previewCard, "image.png"));

    // 업로드 함수 호출
    try {
      const response = await baseAxios.post(
        `/photo/upload/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("사진 업로드 : ", response);
      navigate("/home");
    } catch (error) {
      console.error("사진 업로드 > 오류 발생 : ", error);
    }
  };

  // 모달창 관리
  const cookie = getCookie("jwtToken");
  const [activeModal, setActiveModal] = useState<"boost" | "download" | null>(
    null
  );
  const openModal = (modalType: "boost" | "download") => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <StyledPreview>
      <Header />
      <div style={{ marginTop: "45px" }}>
        <img
          src={previewCard}
          ref={cardRef}
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
              <BoastButton onClick={() => openModal("boost")}>
                자랑하기
              </BoastButton>
              <DownloadButton
                onClick={() => {
                  openModal("download");
                }}
              >
                저장하기
              </DownloadButton>
            </PreviewGuideButtonContainer>
          </PreviewGuideBox>
        </PreviewBox>
        {activeModal === "boost" && cookie && (
          <ModalOverlay show={true} onHideModal={closeModal}>
            <Modal
              title="자랑하기"
              subtitle="자랑하시겠어요?"
              buttonName="자랑하기"
              onMoveClick={() => {
                onUploadButton();
              }}
              onHideModal={closeModal}
            />
          </ModalOverlay>
        )}
        {activeModal === "boost" && !cookie && (
          <ModalOverlay show={true} onHideModal={closeModal}>
            <SignInModal
              title="로그인하기"
              subtitle="로그인하시겠어요?"
              buttonName="로그인하기"
              onMoveClick={() => {
                navigate("/mypage");
              }}
              onHideModal={closeModal}
            />
          </ModalOverlay>
        )}
        {activeModal === "download" && (
          <ModalOverlay show={true} onHideModal={closeModal}>
            <Modal
              title="다운로드"
              subtitle="다운로드 하시겠어요?"
              buttonName="다운로드"
              onHideModal={closeModal}
              onMoveClick={() => {
                onDownloadButton();
                closeModal();
              }}
            />
          </ModalOverlay>
        )}
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
