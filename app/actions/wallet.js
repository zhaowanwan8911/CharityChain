import {

} from '../constants/API'
import RestfulAPIUtils from '../Utils/RestfuAPIUtils'
import * as types from '../constants/ActionTypes'

export const setWalletInfo = ($walletInfo) => {
  return  (dispatch) => {
    dispatch({type: types.SET_WALLET_INFO, payload: $walletInfo})
  }
}

