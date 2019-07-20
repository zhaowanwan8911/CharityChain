import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserInfo from '../UserInfo/UserInfo'
import TableList from '../TableList/TableList'
import Account from '../Account/Account'
import Pagiation from '../Pagination/Pagination'

import styles from './Charity.scss'
import {getTransforHistory} from "../../actions/wallet";

class Charity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
      transforHistory:[],
    }
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
    this.sessionName = '交易记录'
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
    this.props.getTransforHistory(this.props.walletInfo.address,'all')
  }
  handleScroll = (e) => {
    if (e.srcElement.scrollingElement.scrollTop > 100) {
      this.setState({
        hideNav: true,
      })
    } else {
      this.setState({
        hideNav: false,
      })
    }
  }
  paging = (pageCurr) => {
    //console.log(pageCurr)
    // 获取受捐记录的数据（根据页数）
  }

  render() {
    return (
      <div className={styles.charityWraper} style={this.state.hideNav ? { marginTop: '161px' } : { marginTop: '0' }}>
        <div className={styles.charityInfoBox}>
          <div className={styles.charityInfo}>
            <UserInfo userInfo={this.userInfo} />
          </div>
          <div className={styles.charityActive}>
            <Account
              buttonName="爱心助力"
            />
          </div>
        </div>
        <div className={styles.charityList}>
          <TableList
            tableHeader={this.tableHeader}
            tableData = {this.state.transforHistory}
            sessionName={this.sessionName}
            refreshList={this.refreshList}
            type="all"
            plus="all"
            address={this.props.walletInfo.address}
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
    transforHistory: state.wallet.transforHistory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransforHistory: bindActionCreators(getTransforHistory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Charity))
