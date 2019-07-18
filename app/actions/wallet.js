import {
  API_GET_BALANCE
} from '../constants/API'
import RestfulAPIUtils from '../Utils/RestfuAPIUtils'
import * as types from '../constants/ActionTypes'
import {API_LOGIN} from "../constants/API";

export const setWalletInfo = ($walletInfo) => {
  return  (dispatch) => {
    dispatch({type: types.SET_WALLET_INFO, payload: $walletInfo})
  }
}

export const getBalance = ($address) => {
  return async (dispatch) => {
    try {
      const result = await RestfulAPIUtils.get(API_GET_BALANCE + $address)
      if (result.status === 200) {
        dispatch({ type: types.SET_WALLET_BALANCE, payload: result.data.Result.ont })
      } else {
        throw result.status.message
      }
    } catch (e) {
      console.error(e)
    }
  }
}
