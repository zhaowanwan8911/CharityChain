import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import TableList from '../TableList/TableList'
import Pagiation from '../Pagination/Pagination'

import styles from './BusinessDetail.scss'

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
    this.tabs = [
      '慈善机构交易面板',
      '执行机构交易面板',
      '供应商交易面板',
    ]
    this.sessionName1 = '捐款记录'
    this.tableHeader1 = [
      {
        name: '爱心时间',
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
    this.tableData1 = [
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100',
      },
      {
        time: '2019-08-15',
        hashValue: '09e599ecde6eec18608bdecd0cf0a54b02bc9d55239e1b1bd291558e5a6ef3fa',
        walletAddress: 'A15NzM9iE3VT9X8SGk5h3dii6GPFQh2vme',
        amount: '100',
      },
    ]
    this.sessionName2 = '受捐记录'
  }
  refreshList1 = () => {
  }
  refreshList2 = () => {
  }
  toggle = (index) => {
    this.setState({
      activeIndex: index,
    })
  }
  paging = (pageCurr) => {

  }
  showTable = (index) => {
    switch (index) {
      case 0 :
        return (
          <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.tableData1}
          refreshList={this.refreshList1}
          hideRefresh
          />
        )
      case 1 :
        return (
          <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.tableData1}
          refreshList={this.refreshList1}
          hideRefresh
          />
        )
      case 2 :
        return (
          <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.tableData1}
          refreshList={this.refreshList1}
          hideRefresh
          />
        )
      default:
          return
    }
  }
  render() {
    return (
      <div className={styles.BusinessDetail}>
        <div className={styles.search}>
          <input type="text" placeholder="搜索"/>
          <div className={styles.btn}>搜索</div>
        </div>
        <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.tableData1}
          sessionName={this.sessionName1}
          refreshList={this.refreshList1}
          colorClass="green"
        />
        <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.tableData1}
          sessionName={this.sessionName2}
          refreshList={this.refreshList1}
          colorClass="red"
        />
        <div className={styles.tabsWraper}>
          <div className={styles.tabs}>
            {
              this.tabs.map((item, index) => {
                return (
                  <div key={index}>
                    <span
                      className={this.state.activeIndex === index ? styles.active : null}
                      onClick={() => {this.toggle(index)}}
                    >
                      {item}
                    </span>
                  </div>
                )
              })
            }
          </div>
          {
            this.showTable(this.state.activeIndex)
          }
          <Pagiation
            config = {{
              totalPage: 18,
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BusinessDetail))
