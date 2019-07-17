import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import wallet from './wallet'
import login from './login'

const rootReducer = combineReducers({
  wallet: wallet,
  login: login,
  intl: intlReducer,
})

export default rootReducer
