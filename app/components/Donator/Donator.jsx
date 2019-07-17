import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import TableList from '../TableList/TableList'
import UserInfo from '../UserInfo/UserInfo'
import Account from '../Account/Account'
import Pagiation from '../Pagination/Pagination'
import ReleaseHistory from '../ReleaseHistory/ReleaseHistory'

import styles from './Donator.scss'

import PIC from './pic.jpg'
import {setWalletInfo} from "../../actions/wallet";
import {login} from "../../actions/login";

class HelpSeeker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // 受助列表
    this.tableHeader = [
      {
        name: '受捐时间',
        width: '',
      },
      {
        name: '交易哈希',
        width: '',
      },
      {
        name: '地址',
        width: '',
      },
      {
        name: '数量',
        width: '',
      },
    ]
    this.tableData = [
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100 ont',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100 ont',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100 ont',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100 ont',
      },
    ]
    this.sessionName = '受捐记录'
    // 发布历史记录
  }
  paging = (pageCurr) => {
    //console.log(pageCurr)
    // 获取受捐记录的数据（根据页数）
  }
  componentDidMount = () => {
    // 获取受捐记录的数据（默认第一页）
    // 获取个人钱包信息
    // 获取个人钱包余额 ，捐款后再次触发获取余额
  }
  refreshList = () => {
    // 获取受捐记录的数据（默认第一页）
  }
  operate = () => {
    // 发布信息的方法
  }
  render() {
    return (
      <div className={styles.recipientsInfo}>
        <div className={styles.recipients}>
          <div className={styles.sessionName}>
            个人钱包
          </div>
          <UserInfo
          />
          <Account
            buttonName="捐款"
            operate={this.operate}
          />
        </div>
        <div className={styles.recipientsRecord}>
          <TableList
            tableHeader={this.tableHeader}
            tableData = {this.tableData}
            sessionName={this.sessionName}
            refreshList={this.refreshList}
          />
          <Pagiation
            config = {{
              totalPage: 3,
              paging: this.paging,
            }}
          />
        </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HelpSeeker))
