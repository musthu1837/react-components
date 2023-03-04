import React, { createContext, useState } from "react";
import { Loader } from "../components";

const LoaderContext = createContext(null);

function LoaderProvider({ children }) {
  const [isLoading, setLoading] = useState(false);

  const renderLoader = () => <Loader />;

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && renderLoader()}
    </LoaderContext.Provider>
  );
}

export { LoaderProvider, LoaderContext };
