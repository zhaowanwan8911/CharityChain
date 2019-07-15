import * as types from '../constants/ActionTypes'
export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN, payload: { username: username, password: password } })
  }
}

