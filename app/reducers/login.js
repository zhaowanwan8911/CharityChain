import * as types from '../constants/ActionTypes'

const login = (state = {
  personalInfo: { },
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.LOGIN:
      return Object.assign({}, state, { personalInfo: payload })
    default:
      return state
  }
}

export default login
