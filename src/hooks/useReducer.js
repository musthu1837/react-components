import { useReducer as useNativeReducer, useMemo } from "react";

const createReducer = (actionMap) => (state, action) =>
  actionMap[action.type](state, action.payload) ?? state;

const createActions = (actionMap, dispatch) =>
  Object.keys(actionMap).map(
    (key) => (payload) =>
      dispatch({
        type: key,
        payload,
      })
  );

/**
 * @author musthu1837@github
 * @param {*} actionMap
 * @param {*} initialState
 * @returns {state, actions}
 */
function useReducer(actionMap, initialState) {
  const [state, dispatch] = useNativeReducer(
    createReducer(actionMap),
    initialState
  );

  const actions = useMemo(
    () => createActions(actionMap, dispatch),
    [actionMap, dispatch]
  );

  return {
    state,
    actions,
  };
}

export { useReducer };
