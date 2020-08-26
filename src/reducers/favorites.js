// IMMUTABILITY HELPER
import { update } from 'immutability-helper'

const initialState = {
  list: []
}

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case 'ADD_FAVORITE': 
    console.log('ADD FAVORITE', payload);
      return {
        ...state,
        list: state.list.concat(payload)
      } 

    default:
      return state
  }
}

export default favoritesReducer