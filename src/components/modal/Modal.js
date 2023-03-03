import React, { useCallback, useRef } from "react";
import "./Modal.css";

function Modal({ onClose, config = {} }) {
  const wrapperRef = useRef(null);
  const { headerText, body, actions } = config;

  const onContextOutsideClick = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div className="modal" onClick={onContextOutsideClick}>
      <div ref={wrapperRef} className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {headerText && (
          <div className="modal-header">
            <h2>{headerText}</h2>
          </div>
        )}
        {body && <div className="modal-body">{body}</div>}
        {actions && (
          <div className="modal-footer">
            {actions.map((action) => (
              <button
                className="modal-action-button"
                key={action.actionText}
                onClick={action.handleAction}
              >
                {action.actionText}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
