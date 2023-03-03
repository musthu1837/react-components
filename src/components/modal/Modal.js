import React from "react";
import { useOutsideClick } from "../../hooks";
import "./Modal.css";

function Modal({ onClose, config }) {
  const { title, body, actions, hasCloseIcon } = config;

  const { onContextOutsideClick, wrapperRef } = useOutsideClick(onClose);

  return (
    <div className="modal-wrapper" onClick={onContextOutsideClick}>
      <div ref={wrapperRef} className="card">
        {hasCloseIcon && (
          <button
            type="button"
            className="btn-close close"
            aria-label="Close"
            onClick={onClose}
          />
        )}
        {title && (
          <div className="card-header">
            <h5 className="card-title">{title}</h5>
          </div>
        )}

        {body && <div className="card-body">{body}</div>}
        {actions && (
          <div className="card-footer">
            <div className="card-footer-content">
              {actions.primaryAction && (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={actions.primaryAction.action}
                >
                  {actions.primaryAction.title}
                </button>
              )}
              &nbsp;&nbsp;
              {actions.secondaryAction && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={actions.secondaryAction.action}
                >
                  {actions.secondaryAction.title}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
