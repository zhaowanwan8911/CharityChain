import * as types from '../constants/ActionTypes'

const recipient = (state = {
  recipientInfo: {},
  recipientProjectList: {},
  recipientContent: {}
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.POST_CREAT_PROJECT:
      return Object.assign({}, state, { recipientInfo: payload })
    case types.GET_RECIPENT_LIST:
      return Object.assign({}, state, { recipientProjectList: payload })
    case types.GET_RECIPENT_CONTENT:
      return Object.assign({}, state, { recipientContent: payload })
    default:
      return state
  }
}

export default recipient
