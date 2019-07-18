import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
// import Swal from 'sweetalert2'

import DonationTemplate from '../DonationTemplate/DonationTemplate'
import styles from './Account.scss'
import {getBalance} from "../../actions/wallet";

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      walletInfo:'',
      walletBalance:'',
      showBord: false,
    }
  }
  componentDidMount = () => {
    this.props.getBalance(this.props.walletInfo.address)
    this.setState({walletInfo: this.props.walletInfo})
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.walletBalance !== nextProps.walletBalance) {
      this.setState({walletBalance: nextProps.walletBalance})
    }
  }
  operate = () => {
    switch (this.props.buttonName){
      case '捐款':
        this.showBord()
        break
    }
  }
  showBord = () => {
    this.setState({
      showBord: true,
    })
  }
  hideBord = (showBord) => {
    this.setState({
      showBord: showBord,
    })
  }
  render() {
    return (
      <div className={styles.account}>
        <h2 className={styles.accountTitle}>钱包地址</h2>
        <div className={styles.accountInfo}>
          {this.state.walletInfo.address}
        </div>
        <h2 className={styles.accountTitle}>钱包余额</h2>
        <div className={styles.accountInfo}>
          <span>{this.state.walletBalance}</span> ont
        </div>
        <div className={styles.operate} onClick={() => {this.operate()}}>{this.props.buttonName}</div>
        {this.state.showBord && <DonationTemplate showBord={this.state.showBord} hideBord={this.hideBord} />}
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
    getBalance: bindActionCreators(getBalance, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Account))
