import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './TransactionSuccessTemplate.scss'

class TransactionSuccessTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  closeBord = () => {
    this.props.hideBord(false)
  }

  render() {
    return (
      <div className={styles.templateWraper}>
        <span className={styles.closeBtn} onClick={this.closeBord}>x</span>
        <h1>捐款成功</h1>
        <div className={styles.info}>
          <div>
            <label>谢谢您的爱心，您的交易哈希为：</label>
            <span>{this.props.transactionHash}</span>
          </div>
        </div>
        <div className={styles.submit} onClick={this.closeBord}>确定</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TransactionSuccessTemplate))
