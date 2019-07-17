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

import styles from './Recipients.scss'

import PIC from './pic.jpg'
import {setWalletInfo} from "../../actions/wallet";
import {login} from "../../actions/login";

class HelpSeeker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // 用户信息
    this.userInfo = {
      name: {
        key: '姓名',
        value: '张之雅'

      },
      guardian: {
        key: '监护人',
        value: '张志国'

      },
      phone: {
        key: '联系方式',
        value: '18510601969'

      },
      homeAddress: {
        key: '联系地址',
        value: '北京市海淀区'

      },
    }
    // 账户信息
    this.account = {
      walletAddress: '09e599ecde6eec18608bdecd0cf0a54b02b',
      balance: 20,
      operateBtn: '发布申请',
    }

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
    this.releaseHistory = [
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 0,
      },
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 0,
      },
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 0,
      },
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 0,
      },
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 1,
      },
      {
        pic: PIC,
        title: '大卫·贝克汉姆探访了位于上海市郊的香花桥幼儿园',
        time: '2019.09.09',
        status: 0,
      },
    ]
  }
  paging = (pageCurr) => {
    console.log(pageCurr)
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
            buttonName="发布申请"
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
              totalPage: 18,
              paging: this.paging,
            }}
          />
        </div>
        <div className={styles.releaseHistory}>
          {
            this.releaseHistory.map((item, index) => {
              return (
                <ReleaseHistory info={item} key={index}/>
              )
            })
          }
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
