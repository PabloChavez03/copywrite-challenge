import axios from "axios";
import { GET_TEXTS, DELETE_TEXT, POST_TEXT } from "../actions-types";

export const getTexts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/text");
    return dispatch({
      type: GET_TEXTS,
      payload: data,
    });
  };
};

export const postTexto = (info) => {
  return function (dispatch) {
    const data = {
      text: info
    };
    const postProduct = axios
      .post("http://localhost:3001/text", data)
      .then((response) => dispatch({type: POST_TEXT, payload: response}));
    return postProduct;
  };
};

export const deleteText = (id) => {
  return function (dispatch) {
		return axios
			.delete(`http://localhost:3001/text/${id}`)
			.then((response) => dispatch({type: DELETE_TEXT, payload: response}));
	};
}
