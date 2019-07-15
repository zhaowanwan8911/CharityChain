import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

import login from './login'

const rootReducer = combineReducers({
  login,
  intl: intlReducer,
})

export default rootReducer
