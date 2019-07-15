import * as types from '../constants/ActionTypes'

const login = (state = {
  loginInfo: { },
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.LOGIN:
      return Object.assign({}, state, { loginInfo: payload })
    default:
      return state
  }
}

export default login
