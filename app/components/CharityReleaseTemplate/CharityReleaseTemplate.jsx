import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './CharityReleaseTemplate.scss'
import {CHARITY_ADDRESS} from '../../constants/Address'
import WalletTransaction from "../../constants/ont-wallet/transaction";
import GetWalletFileMsg from "../../constants/ont-wallet/info";
import TransactionSuccessTemplate from '../TransactionSuccessTemplate/TransactionSuccessTemplate'

class CharityReleaseTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  closeBord = () => {
    this.props.hideBord(false)
  }

  render() {
    return (
      <div className={styles.templateWraper}>
        <span className={styles.closeBtn} onClick={this.closeBord}>x</span>
        <h1>助力项目</h1>
        <div className={styles.info}>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: state.wallet.walletInfo,
    personalInfo: state.login.personalInfo,
    walletBalance: state.wallet.walletBalance,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CharityReleaseTemplate))
