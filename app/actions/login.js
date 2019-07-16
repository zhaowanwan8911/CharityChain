import * as types from '../constants/ActionTypes'

export const login = (file, password) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN, payload: { file: file, password: password } })
  }
}

