import { useCallback, useRef } from "react";

function useOutsideClick(handleOutSideClick) {
  const wrapperRef = useRef(null);
  const onContextOutsideClick = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (handleOutSideClick) {
          handleOutSideClick();
        }
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
