import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './DonationTemplate.scss'
import {CHARITY_ADDRESS} from '../../constants/Address'
import WalletTransaction from "../../constants/ont-wallet/transaction";
import GetWalletFileMsg from "../../constants/ont-wallet/info";

class DonationTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password:'',
      money:'',
    }
  }

  closeBord = () => {
    this.props.hideBord(false)
  }

  toTransaction = () => {
    console.log(this.props.walletInfo.walletFile)
    console.log(this.password)
    let info = GetWalletFileMsg.decryptWalletFile(this.props.walletInfo.walletFile, this.state.password)
    console.log(info)
    if(info.isGetInfo){
      let msg = WalletTransaction.sendTransaction(this.props.walletInfo.address,CHARITY_ADDRESS,info.privateKey,this.state.money )
      console.log(msg)
    }

  }
  setPassword = (e) => {
    this.setState({password: e.target.value})
  }
  setValue = (e) => {
    this.setState({money: e.target.value})
  }
  render() {
    return (
      <div className={styles.templateWraper}>
        <span className={styles.closeBtn} onClick={this.closeBord}>x</span>
        <h1>爱心捐款</h1>
        <div className={styles.info}>
          <div>
            <label>钱包地址：</label>
            <span>{this.props.walletInfo.address}</span>
          </div>
          <div>
            <label>捐款金额：</label>
            <input type="text" onChange={this.setValue}/>
            <span>余额：{this.props.walletBalance} Ont</span>
          </div>
          <div>
            <label>输入密码：</label>
            <input type="password" onChange={this.setPassword}/>
          </div>
        </div>
        <div className={styles.submit} onClick={this.toTransaction}>捐款</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(DonationTemplate))
