import React from "react";
import styled from "styled-components";

interface ModalOverlayProps {
  show: boolean;
  onHideModal: () => void;
  blur?: boolean;
  children: React.ReactNode;
}

const Overlay = styled.div<{ show: boolean }>`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(11, 19, 30, 0.37);

  &.blurEffect {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`;

export default function ModalOverlay(props: ModalOverlayProps) {
  return (
    <Overlay show={props.show}>
      <Backdrop
        onClick={props.onHideModal}
        className={props.blur ? "blurEffect" : ""}
      />
      {props.children}
    </Overlay>
  );
}
