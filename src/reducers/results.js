const initialState = [];

const resultsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case 'ON_LOAD':
      return {
        ...state,
        list: payload
      } 
    default:
      return state
  }
}

export default resultsReducer