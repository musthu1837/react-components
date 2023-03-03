import { useCallback, useRef } from "react";

function useOutsideClick(handleOutSideClick) {
  const wrapperRef = useRef(null);
  const onContextOutsideClick = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleOutSideClick();
      }
    },
    [handleOutSideClick]
  );
  return {
    onContextOutsideClick,
    wrapperRef,
  };
}

export { useOutsideClick };
