import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import wallet from './wallet'

const rootReducer = combineReducers({
  wallet: wallet,
  intl: intlReducer,
})

export default rootReducer
