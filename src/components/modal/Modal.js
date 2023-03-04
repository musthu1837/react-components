import React, { useCallback } from "react";
import { useEscapeKey, useOutsideClick } from "../../hooks";
import "./Modal.css";

function ModalHeader(props) {
  return (
    <div className="card-header">
      <h5 className="card-title">{props.children}</h5>
    </div>
  );
}

function ModalBody(props) {
  return <div className="card-body">{props.children}</div>;
}

function ModalFooter(props) {
  return <div className="card-footer">{props.children}</div>;
}

function ModalActions(props) {
  return (
    <div className="card-footer">
      <div className="card-footer-content">{props.children}</div>
    </div>
  );
}

function Modal({ onClose, children, canClose }) {
  const onDismiss = useCallback(() => {
    if (canClose && onClose) {
      onClose();
    }
  }, [canClose, onClose]);

  useEscapeKey(onDismiss);
  const { onContextOutsideClick, wrapperRef } = useOutsideClick(onDismiss);

  return (
    <div className="modal-wrapper" onClick={onContextOutsideClick}>
      <div ref={wrapperRef} className="card">
        {canClose && (
          <button
            type="button"
            className="btn-close close"
            aria-label="Close"
            onClick={onClose}
          />
        )}
        {children}
      </div>
    </div>
  );
}

export { Modal, ModalHeader, ModalBody, ModalFooter, ModalActions };
