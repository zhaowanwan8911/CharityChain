import * as types from '../constants/ActionTypes'

const wallet = (state = {
  walletInfo: {
    address: "AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP",
    role:'donator'
  },
  walletBalance: {
    ont:10000,
  },
}, action) => {
  const { type, payload } = action
  switch (type) {
    case types.SET_WALLET_INFO:
      return Object.assign({}, state, { walletInfo: payload })
    case types.SET_WALLET_BALANCE:
      return Object.assign({}, state, { walletBalance: payload })
    default:
      return state
  }
}

export default wallet
