import React from "react";
import { Modal, ModalBody } from "../modal/Modal";

function Loader() {
  return (
    <Modal canClose={false}>
      <ModalBody>
        <div className="spinner-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;
          <span>Loading...</span>
        </div>
      </ModalBody>
    </Modal>
  );
}

export { Loader };
