import { useCallback, useRef } from "react";

/**
 * author Github@musthu1837
 * useContextOutsideClick hook is used to perform some action
 * when user clicks outside of an element
 * @param handleOutSideClick
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
