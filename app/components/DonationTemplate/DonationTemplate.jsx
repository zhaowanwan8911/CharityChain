import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './DonationTemplate.scss'

class DonationTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  closeBord = () => {
    this.props.hideBord(false)
  }

  render() {
    return (
      <div className={styles.templateWraper}>
        <span className={styles.closeBtn} onClick={this.closeBord}>x</span>
        <h1>爱心捐款</h1>
        <div className={styles.info}>
          <div>
            <label>钱包地址：</label>
            <span>123456789012345678901234567890</span>
          </div>
          <div>
            <label>捐款金额：</label>
            <input type="text"/>
            <span>余额：20 Ont</span>
          </div>
          <div>
            <label>输入密码：</label>
            <input type="password"/>
          </div>
        </div>
        <div className={styles.submit}>捐款</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(DonationTemplate))
