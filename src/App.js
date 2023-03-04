import { useState, useCallback } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalActions,
  Button,
} from "./components";
import { useLoader } from "./hooks";
import "./App.css";

function App() {
  const [isDeleteUser, setDeleteUser] = useState(false);
  const [isAddUser, setAddUser] = useState(false);
  const { setLoading } = useLoader();

  const handleFetchUsers = useCallback(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading]);

  const handleDeleteUser = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDeleteUser(false);
    }, 2000);
  }, [setLoading]);

  const handleAddUser = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddUser(false);
    }, 2000);
  }, [setLoading]);

  const renderDeleteUserModal = useCallback(() => {
    return (
      <Modal canClose onClose={() => setDeleteUser(false)}>
        <ModalHeader>Delete User</ModalHeader>
        <ModalBody>
          <span>Are you sure want to delete user?</span>
        </ModalBody>
        <ModalActions>
          <Button onClick={handleDeleteUser} primary>
            Yes
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => setDeleteUser(false)} secondary>
            No
          </Button>
        </ModalActions>
      </Modal>
    );
  }, [handleDeleteUser]);

  const renderAddUserModal = useCallback(() => {
    return (
      <Modal canClose onClose={() => setAddUser(false)}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
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
            <label className="form-label">Office address</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </ModalBody>
        <ModalActions>
          <Button onClick={handleAddUser} primary>
            Yes
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => setAddUser(false)} secondary>
            No
          </Button>
        </ModalActions>
      </Modal>
    );
  }, [handleAddUser]);

  return (
    <div className="container">
      {isDeleteUser && renderDeleteUserModal()}
      <Button onClick={() => setDeleteUser(true)} primary>
        Delete User
      </Button>

      {isAddUser && renderAddUserModal()}
      <Button onClick={() => setAddUser(true)} primary>
        Add User
      </Button>

      <Button onClick={handleFetchUsers} primary>
        Fetch Users
      </Button>
    </div>
  );
}

export default App;
