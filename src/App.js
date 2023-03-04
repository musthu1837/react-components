import { useCallback } from "react";
import "./App.css";
import { useModal } from "./hooks";

function App() {
  const { openModal, closeModal } = useModal();

  const onModalClose = useCallback(() => {
    console.log("Modal is closed");
  }, []);

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
      title: "Delete",
      boddy: <p>Are you sure want to delete?</p>,
      body: (
        <>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </>
      ),
      onClose: onModalClose,
      hasCloseIcon: true,
      actions: {
        primaryAction: {
          title: "Yes",
          action: onYesClick,
        },
        secondaryAction: {
          title: "No",
          action: onNoClick,
        },
      },
    };

    openModal(config);
  }, [onModalClose, openModal, onYesClick, onNoClick]);

  return (
    <div className="App">
      <button className="btn btn-primary btn-sm" onClick={onOpenModalClick}>
        Open Modal
      </button>
    </div>
  );
}

export default App;
