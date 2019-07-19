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

class Charity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
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
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100 ont',
      },
    ]
    this.sessionName = '交易记录'
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Charity))
