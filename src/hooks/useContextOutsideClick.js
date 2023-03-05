import { useCallback, useRef } from "react";

/**
 * @author musthu1837@github
 * @param {*} handleOutSideClick called when user clicks outside of an element
 * @returns { onContextOutsideClick, eleRef }
 */
function useContextOutsideClick(handleOutSideClick) {
  const eleRef = useRef(null);
  const onContextOutsideClick = useCallback(
    (event) => {
      if (eleRef.current && !eleRef.current.contains(event.target)) {
        if (handleOutSideClick) {
          handleOutSideClick();
        }
      }
    },
    [handleOutSideClick]
  );
  return {
    onContextOutsideClick,
    eleRef,
  };
}

export { useContextOutsideClick };
