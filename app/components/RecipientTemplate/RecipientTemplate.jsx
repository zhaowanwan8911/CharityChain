import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './RecipientTemplate.scss'
import {CHARITY_ADDRESS} from '../../constants/Address'
import WalletTransaction from "../../constants/ont-wallet/transaction";
import GetWalletFileMsg from "../../constants/ont-wallet/info";
import TransactionSuccessTemplate from '../TransactionSuccessTemplate/TransactionSuccessTemplate'
import { creatRecipient } from '../../actions/recipient'

class RecipientTemplate extends React.Component {
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
  showSuccessBord = () => {
    this.props.showSuccessBord()
  }
  getTransHash = ($hash) => {
    this.props.getTransHash($hash)
  }
  toTransaction = async() => {
    // let info = GetWalletFileMsg.decryptWalletFile(this.props.walletInfo.walletFile, this.state.password)
    // if(info.isGetInfo){
    //   let msg = await WalletTransaction.sendTransaction(this.props.walletInfo.address,CHARITY_ADDRESS,info.privateKey,this.state.money )
    //   if(msg.Desc === "SUCCESS") {
    //     this.showSuccessBord()
    //     this.getTransHash(msg.Result)
    //   }
    // }
    const params = {
      money: 200,
      title: '求助',
      contnet: '希望工程',
      wallet_address: 'AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP',
    }
    this.props.creatRecipient(params)
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
        <h1>发布捐助信息</h1>
        <div className={styles.info}>
          <div>
            <label>钱包地址：</label>
            <span>{this.props.walletInfo.address}</span>
          </div>
          <div>
            <label>筹款数量：</label>
            <input type="text" onChange={this.setValue}/>
            <span>Ont</span>
          </div>
        </div>
        <div className={styles.recipientInfo}>
          <div className={styles.left}>
            <p>视频/照片上传</p>
            <img src="" alt="Image preview..."/>
          </div>
          <div className={styles.right}>
             <label>标题：</label>
             <input type="text" placeholder="标题" />
             <label>发声：</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="发声" />
          </div>
        </div>
        <div className={styles.submit} onClick={this.toTransaction}>发布</div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: state.wallet.walletInfo,
    personalInfo: state.login.personalInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    creatRecipient: bindActionCreators(creatRecipient, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(RecipientTemplate))
