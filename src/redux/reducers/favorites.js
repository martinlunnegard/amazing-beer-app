const initialState = {
  list: []
}

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        list: [...state.list, payload]
      } 
    case 'REMOVE_FAVORITE':
    return {
      ...state,
      list: [...state.list.filter(item => item.id !== payload.id)]
    }  

    default:
      return state
  }
}

export default favoritesReducer