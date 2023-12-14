import { ChangeEvent, useReducer } from "react";

const initState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const incrementar = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrementar = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  const handleTextIput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: evt.target.value,
    });
  };

  return (
    <div className="card ">
      <div className="card-body">
        <h5 className="card-title text-dark">{state.count}</h5>
        <p className="card-text text-info">{state.text}</p>
        <button className="btn btn-outline-success " onClick={incrementar}>
          +
        </button>
        <button className="btn btn-outline-danger mx-2" onClick={decrementar}>
          -
        </button>
        <input
          type="text"
          onChange={handleTextIput}
          placeholder="Escriba algo.."
        />
      </div>
    </div>
  );
};

export default ReducerHook;
