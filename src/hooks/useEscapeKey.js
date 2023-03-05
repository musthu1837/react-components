import { useCallback, useEffect } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

/**
 * author Github@musthu1837
 * useEscapeKey hook is used to perform some action on escape key press
 * Triggers call back when user press escape key
 */
function useEscapeKey(handleAction) {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC && handleAction) {
        handleAction();
      }
    },
    [handleAction]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}

export { useEscapeKey };
