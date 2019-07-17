import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './ReleaseHistory.scss'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavLink to="">
        <div className={styles.releaseItem}>
          <div className={styles.img}>
            <img src={this.props.info.pic} alt=""/>
          </div>
          <div className={styles.releaseInfo}>
            <h3>{this.props.info.title}</h3>
            <span className={styles.time}>时间：{this.props.info.time}</span>
            {this.props.info.status === 0 ? <span className={styles.inProgess}>进行中</span> : <span className={styles.complete}>已完成</span>}
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
