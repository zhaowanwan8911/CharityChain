import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './Account.scss'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.account}>
        <h2 className={styles.accountTitle}>钱包地址</h2>
        <div className={styles.accountInfo}>
          {this.props.account.address}
        </div>
        <h2 className={styles.accountTitle}>钱包余额</h2>
        <div className={styles.accountInfo}>
          <span>{this.props.account.money}</span> ont
        </div>
        <div className={styles.operate} onClick={() => {this.props.operate()}}>{this.props.account.operateBtn}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Account))
