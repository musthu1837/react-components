import React, { useContext } from "react";
import { ModalContext } from "../contexts";

function useModal() {
  return useContext(ModalContext);
}

export { useModal };
