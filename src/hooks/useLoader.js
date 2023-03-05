import { useContext } from "react";
import { LoaderContext } from "../contexts";

/**
 * @author musthu1837@github
 * @returns { isLoading, setLoading } value of LoaderContext
 */
function useLoader() {
  return useContext(LoaderContext);
}

export { useLoader };
