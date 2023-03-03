import { useCallback, useContext } from "react";
import "./App.css";
import { useModal } from "./hooks";

function App() {
  const { isVisible, openModal, closeModal } = useModal();

  const onModalClose = useCallback(() => {
    console.log("Modal is closed");
  });

  const onYesClick = useCallback(() => {
    console.log("Yes is clicked");
    closeModal();
  }, [closeModal]);

  const onNoClick = useCallback(() => {
    console.log("No is clicked");
    closeModal();
  }, [closeModal]);

  const onOpenModalClick = useCallback(() => {
    const config = {
      headerText: "Delete",
      body: <p>are you sure want to delete?</p>,
      onClose: onModalClose,
      actions: [
        {
          actionText: "Yes",
          handleAction: onYesClick,
        },
        {
          actionText: "No",
          handleAction: onNoClick,
        },
      ],
    };

    openModal(config);
  }, [onModalClose, openModal, onYesClick]);

  return (
    <div className="App">
      <button onClick={onOpenModalClick}>Open Modal</button>
      <p>Modal is {isVisible ? "opend" : "closed"}</p>
    </div>
  );
}

export default App;
