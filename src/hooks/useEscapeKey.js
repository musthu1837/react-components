import { useCallback, useEffect } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

/**
 * @author musthu1837@github
 * @param {*} handleAction called when user presses escape key
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
