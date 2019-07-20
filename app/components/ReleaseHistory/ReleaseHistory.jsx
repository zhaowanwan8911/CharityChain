import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './ReleaseHistory.scss'
import PIC from '../ReleaseHistory/pic.jpg'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavLink to={"/recipient/"+this.props.info.id}>
        <div className={styles.releaseItem}>
          <div className={styles.img}>
            <img src={PIC} alt=""/>
          </div>
          <div className={styles.releaseInfo}>
            <h3>{this.props.info.title}</h3>
            <span className={styles.time}>姓名：{this.props.info.name}</span>
            <span className={styles.time}>金额：{this.props.info.money}</span>
            {this.props.info.state === 'In process' ? <span className={styles.inProgess}>进行中</span>
              : this.props.info.state === 'Finish' ? <span className={styles.complete}>已完成</span>
                : <span className={styles.complete}>审核中</span>}
          </div>
        </div>
      </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Account))
