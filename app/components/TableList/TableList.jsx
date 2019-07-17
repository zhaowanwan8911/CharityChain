import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './TableList.scss'

import Pagiation from '../Pagination/Pagination'

class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={styles.tableWraper}>
        <div className={styles.tableContent}>
          {
            this.props.sessionName ? <div className={styles.sessionName}>{this.props.sessionName}</div> : null
          }
          {
            !this.props.hideRefresh ? <div className={styles.refresh} onClick={() => {this.props.refreshList}}> 刷新 </div> : null
          }
          <div className={styles.tableList}>
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  {
                    this.props.tableHeader.map((item, index) => {
                      return (
                        <th width={item.width} key={index}>{item.name}</th>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody>
                {
                  this.props.tableData.map((item, index) => {
                    return (
                      <tr key={index} className={this.props.colorClass === "green" ? styles.green : this.props.colorClass === "red" ? styles.red : null}>
                        {
                          Object.keys(item).map((item1,index1) => {
                            return (
                              item1 === "amount" ? <td key={index1}>{item[item1]} ont</td> : <td key={index1}>{item[item1]}</td>
                            )
                          })
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TableList))
