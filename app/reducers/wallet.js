import * as types from '../constants/ActionTypes'

const wallet = (state = {
  walletInfo: { },
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.SET_WALLET_INFO:
      return Object.assign({}, state, { walletInfo: payload })
    default:
      return state
  }
}

export default wallet
