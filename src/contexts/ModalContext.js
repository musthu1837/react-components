import React, { createContext, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../components";
import { useEscapeKey } from "../hooks";

const ModalContext = createContext(null);

function ModalProvider({ children }) {
  const [isVisible, setVisible] = useState(false);
  const [config, setConfig] = useState(null);

  const closeModal = useCallback(() => {
    setVisible(false);
    config?.onClose();
  }, [config]);

  const openModal = useCallback((config) => {
    setConfig(config);
    setVisible(true);
  }, []);

  const renderModal = useCallback(
    () => <Modal onClose={closeModal} config={config} />,
    [closeModal, config]
  );

  useEscapeKey(closeModal);

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        openModal,
        isVisible,
      }}
    >
      {children}
      {isVisible &&
        createPortal(renderModal(), document.getElementById("modal"))}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

export { ModalContext };
