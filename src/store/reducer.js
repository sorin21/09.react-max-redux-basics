const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  } 
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    }
  } 
  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + 5
    }
  } 
  if (action.type === 'SUBSTRACT') {
    return {
      ...state,
      counter: state.counter - 5
    }
  } 
  return state;
}

export default reducer;