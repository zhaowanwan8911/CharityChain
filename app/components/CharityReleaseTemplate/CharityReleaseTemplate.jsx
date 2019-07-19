import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './CharityReleaseTemplate.scss'
import {CHARITY_ADDRESS} from '../../constants/Address'
import {getRecipientProjectList} from "../../actions/recipient";

class CharityReleaseTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipientProjectList:''
    }
  }
  componentDidMount = () => {
    const params = { type: 'in_process' }
    this.props.getRecipientProjectList(params)
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.recipientProjectList !== nextProps.recipientProjectList) {
      this.setState({recipientProjectList: nextProps.recipientProjectList})
    }
  }
  closeBord = () => {
    this.props.hideBord(false)
  }

  render() {
    return (
      <div className={styles.templateWraper}>
        <span className={styles.closeBtn} onClick={this.closeBord}>x</span>
        <h1>助力项目</h1>
        <div className={styles.info}>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: state.wallet.walletInfo,
    recipientProjectList: state.recipient.recipientProjectList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipientProjectList: bindActionCreators(getRecipientProjectList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CharityReleaseTemplate))
