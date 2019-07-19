import {
  API_POST_CREAT_PROJECT
} from '../constants/API'
import RestfulAPIUtils from '../Utils/RestfuAPIUtils'
import * as types from '../constants/ActionTypes'

export const creatRecipient = (params) => {
  return async (dispatch) => {
    try {
      const result = await RestfulAPIUtils.post(API_POST_CREAT_PROJECT, params)
      if (result.status === 200) {
        dispatch({ type: types.POST_CREAT_PROJECT, payload: result.data })
      }
    } catch (e) {
      console.error(e)
    }
  }
}