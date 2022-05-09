import React, { useState } from "react";

import { ModalContainer } from "./styles";

interface ModalProps {
  id?: string;
  onClose(): void;
  children: any;
}

const Modal = ({ id = "modal", onClose, children }: ModalProps) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  return (
    <>
      <ModalContainer id={id} onClick={handleOutsideClick}>
        <div className="container">
          <button className="close" onClick={() => onClose()} />
          <div className="content">{children}</div>
        </div>
      </ModalContainer>
    </>
  );
};

export default Modal;
