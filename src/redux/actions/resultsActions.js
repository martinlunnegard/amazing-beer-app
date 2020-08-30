import { ON_LOAD } from './actionTypes';

export const onLoad = (payload) => {
  return {
    type: ON_LOAD,
    payload
  }
}