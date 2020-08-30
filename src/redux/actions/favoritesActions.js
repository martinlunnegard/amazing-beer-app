import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes'

export const addFavorite = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload
  }
}

export const removeFavorite = (payload) => {
  return {
    type: REMOVE_FAVORITE,
    payload
  }
}


