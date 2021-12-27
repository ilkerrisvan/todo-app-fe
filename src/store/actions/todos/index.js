import { CREATE_TODO, GET_TODOS } from "../../../app-consts";
import { axiosInstance } from "../../../utils";


export const getTodos = () => {
  return (dispatch) => {
    return Promise.resolve(
      dispatch({
        type: GET_TODOS,
        payload: axiosInstance
          .get('/todo')
          .then(async (res) => res.data),
      })
    ).catch((e) => {
      return e;
    });
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return Promise.resolve(
      dispatch({
        type: CREATE_TODO,
        payload: axiosInstance
          .post('/todo', todo)
          .then(async () => await dispatch(getTodos())),
      })
    ).catch((e) => {
      return e;
    });
  };
};