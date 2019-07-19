import * as types from '../constants/ActionTypes'

const recipient = (state = {
  recipientInfo: {},
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.POST_CREAT_PROJECT:
      return Object.assign({}, state, { recipientInfo: payload })
    default:
      return state
  }
}

export default recipient