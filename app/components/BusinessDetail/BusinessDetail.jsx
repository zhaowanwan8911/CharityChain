import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import TableList from '../TableList/TableList'
import Pagiation from '../Pagination/Pagination'

import styles from './BusinessDetail.scss'
import {getTransforHistory} from "../../actions/wallet";

import {CHARITY_ADDRESS,ACTUATOR_ADDRESS,PROVIDER_ADDRESS} from '../../constants/Address'

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      transforHistoryForDonator:[],
      transforHistoryForCharity:[],
      transforHistoryForActuator:[],
      transforHistoryForProvider:[],
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
    this.sessionName2 = '受捐记录'
  }
  componentDidMount = () => {
    this.refreshList1()
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.transforHistoryForDonator !== nextProps.transforHistoryForDonator) {
      this.setState({transforHistoryForDonator: nextProps.transforHistoryForDonator})
    }
    if (this.props.transforHistoryForCharity !== nextProps.transforHistoryForCharity) {
      this.setState({transforHistoryForCharity: nextProps.transforHistoryForCharity})
    }
    if (this.props.transforHistoryForActuator !== nextProps.transforHistoryForActuator) {
      this.setState({transforHistoryForActuator: nextProps.transforHistoryForActuator})
    }
    if (this.props.transforHistoryForProvider !== nextProps.transforHistoryForProvider) {
      this.setState({transforHistoryForProvider: nextProps.transforHistoryForProvider})
    }
  }
  refreshList1 = () => {
    this.props.getTransforHistory(CHARITY_ADDRESS,'remittee','donator')
    this.props.getTransforHistory(CHARITY_ADDRESS,'all','charity')
    this.props.getTransforHistory(ACTUATOR_ADDRESS,'all','actuator')
    this.props.getTransforHistory(PROVIDER_ADDRESS,'all','provider')
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
            tableData = {this.state.transforHistoryForCharity.slice(0,10)}
            refreshList={this.refreshList1}
            type="all"
            plus="all"
            address={CHARITY_ADDRESS}
          />
        )
      case 1 :
        return (
          <TableList
            tableHeader={this.tableHeader1}
            tableData = {this.state.transforHistoryForActuator.slice(0,10)}
            refreshList={this.refreshList1}
            type="all"
            plus="all"
            address={ACTUATOR_ADDRESS}
          />
        )
      case 2 :
        return (
          <TableList
            tableHeader={this.tableHeader1}
            tableData = {this.state.transforHistoryForProvider.slice(0,10)}
            refreshList={this.refreshList1}
            type="all"
            plus="all"
            address={PROVIDER_ADDRESS}
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
          tableData = {this.state.transforHistoryForDonator.slice(0,10)}
          sessionName={this.sessionName1}
          refreshList={this.refreshList1}
          type="payer"
          plus="-"
          address={CHARITY_ADDRESS}
        />
        <TableList
          tableHeader={this.tableHeader1}
          tableData = {this.state.transforHistoryForDonator.slice(0,10)}
          sessionName={this.sessionName1}
          refreshList={this.refreshList1}
          type="payer"
          plus="-"
          address={CHARITY_ADDRESS}
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
    transforHistoryForDonator: state.wallet.transforHistoryForDonator,
    transforHistoryForCharity:state.wallet.transforHistoryForCharity,
    transforHistoryForActuator:state.wallet.transforHistoryForActuator,
    transforHistoryForProvider:state.wallet.transforHistoryForProvider,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransforHistory: bindActionCreators(getTransforHistory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BusinessDetail))
