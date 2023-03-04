import { useContext } from "react";
import { LoaderContext } from "../contexts";

function useLoader() {
  return useContext(LoaderContext);
}

export { useLoader };
