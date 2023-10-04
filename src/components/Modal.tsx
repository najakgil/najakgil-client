import styled from "styled-components";

interface ModalProps {
  title : string;
  subtitle: string;
  buttonName: string;
  onMoveClick: () => void;
  onHideModal: () => void;
}

export default function Modal({title, subtitle, buttonName, onMoveClick, onHideModal}: ModalProps) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalGuideTitle>{title}</ModalGuideTitle>
        <ModalGuideSubTitle>{subtitle}</ModalGuideSubTitle>
        <ModalButton onClick={onMoveClick}>{buttonName}</ModalButton>
        <CancelButton onClick={onHideModal}>취소</CancelButton>
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 240px;
  height: 180px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  width: 240px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const ModalGuideSubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const ModalButton = styled.button`
  width: 180px;
  height: 32px;
  border-radius: 3px;
  margin: 8px 0 3px 0;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const CancelButton = styled.button`
  all: unset;
  margin-top: 8px;
  cursor: pointer;
  color: #aeaeae;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
