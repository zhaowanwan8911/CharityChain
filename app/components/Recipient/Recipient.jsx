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

import styles from './Recipient.scss'

import PIC from './pic.jpg'
import {getTransforHistory, setWalletInfo} from "../../actions/wallet";
import {login} from "../../actions/login";

class Recipient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
      transforHistory:''
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
    window.addEventListener('scroll', this.handleScroll.bind(this))
    this.refreshList()
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.transforHistory !== nextProps.transforHistory) {
      this.setState({transforHistory: nextProps.transforHistory})
    }
  }
  refreshList = () => {
    this.props.getTransforHistory(this.props.walletInfo.address,'remittee')
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
          />
        </div>
        <div className={styles.recipientsRecord}>
          <TableList
            tableHeader={this.tableHeader}
            tableData = {this.state.transforHistory}
            sessionName={this.sessionName}
            refreshList={this.refreshList}
            type="payer"
            plus="+"
            address={this.props.walletInfo.address}
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
    transforHistory: state.wallet.transforHistory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransforHistory: bindActionCreators(getTransforHistory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Recipient))
