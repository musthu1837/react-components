import { useReducer } from "./useReducer";

const initialState = { counter: 1 };

const actionMap = {
  increment: (state) => ({ ...state, counter: state.counter + 1 }),
  decrement: (state) => ({ ...state, counter: state.counter - 1 }),
  reset: (state) => ({ ...state, counter: 0 }),
  bulkIncrement: (state, payload) => ({
    ...state,
    counter: state.counter + payload,
  }),
  bulkDecrement: (state, payload) => ({
    ...state,
    counter: state.counter - payload,
  }),
};

export default function CounterFunction() {
  const {
    state,
    actions: [
      incrementByOne,
      decrementByOne,
      reset,
      incrementByTen,
      decrementByTen,
    ],
  } = useReducer(actionMap, initialState);

  return (
    <>
      <h3>Counter is {state.counter}</h3>
      <button onClick={incrementByOne}>Increment</button>
      <button onClick={decrementByOne}>Decrement</button>
      <button onClick={() => incrementByTen(10)}>IncrementByTen</button>
      <button onClick={() => decrementByTen(10)}>DecrementByTen</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
