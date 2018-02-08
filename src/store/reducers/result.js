import * as actionTypes from "../actions";

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat({ id: new Date(), value: action.result }) }
    case actionTypes.DELETE_RESULT:
      // const newArray = [...state.results].splice(id, 1);
      // filter returns a new array
      // return true if the id of the 
      // actual element: {id: new Date(), value: state.counter} !==
      // with the id we pass with the action(payload)
      const updatedArray = state.results.filter((result) => result.id !== action.resultElemId)
      return { ...state, results: updatedArray }
  }
  return state;
};

export default reducer;