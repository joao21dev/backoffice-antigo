import axios from "axios";
import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from "./todoTypes";

export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST,
  };
};
const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};
const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};

export const fetchTodos = (id) => {
  return (dispatch) => {
    dispatch(fetchTodosRequest);
    axios
      .get(`https://omssxfdlgh.execute-api.us-east-1.amazonaws.com/users/${id}/todos`)
      .then((response) => {
        const todos = response.data.todos;
        dispatch(fetchTodosSuccess(todos));
        console.log("todos atual ", todos);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTodosFailure(errorMsg));
      });
  };
};
