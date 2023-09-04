import styled from "styled-components";
import ModalOverlay from "./ModalOverlay";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

interface CardItemProps {
  src: string;
}

export default function MyItem(props: CardItemProps) {
  // Delete 모달창 관리
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showDeleteModalHandler = () => {
    setShowDeleteModal(true);
  };

  const hideDeleteModalHandler = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <CardItemBox>
        <DeleteButton onClick={showDeleteModalHandler}>
          <img src="/assets/icon/delete_button.svg" alt="Delete" />
        </DeleteButton>
        <Card src={props.src} alt="Card" />
      </CardItemBox>
      {/* Delete 모달창 */}
      <ModalOverlay blur onHideModal={hideDeleteModalHandler} show={showDeleteModal}>
        <DeleteModal onHideModal={hideDeleteModalHandler} />
      </ModalOverlay>
    </>
  );
}

const CardItemBox = styled.div`
  width: 165px;
  height: 165px;
  position: relative;
`;

const Card = styled.img`
  position: relative;
  z-index: 10;
  width: 165px;
  height: 165px;
  border-radius: 3px;
  border: 0.5px solid #d9d9d9;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  z-index: 20;
`;
