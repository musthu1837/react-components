import { useContext } from "react";
import { LoaderContext } from "../contexts";

/**
 * author Github@musthu1837
 * useLoader hook is used to get LoaderContext value
 */
function useLoader() {
  return useContext(LoaderContext);
}

export { useLoader };
