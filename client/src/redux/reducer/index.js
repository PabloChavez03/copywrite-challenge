import { DELETE_TEXT, GET_TEXTS, POST_TEXT } from "../actions-types"

const initialState = {
  texts: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_TEXTS :
      return {
        ...state,
        texts: payload.reverse(),
      };
    case POST_TEXT :
      return {
        ...state,
      };
    case DELETE_TEXT :
      return {
        ...state,
      }
    default:
      return {...state}
  }
}