import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './CharityReleaseTemplate.scss'
import {CHARITY_ADDRESS} from '../../constants/Address'
import {getRecipientProjectList} from "../../actions/recipient";
import CLOSE from "../DonationTemplate/close.png";
import ReleaseHistory from "../ReleaseHistory/ReleaseHistory";
import PIC from "../ReleaseHistory/pic.jpg";

class CharityReleaseTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipientProjectList:[]
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
      <div>
        <div className={styles.templateDiv}>
        </div>
        <div className={styles.templateWraper}>
          <div className={styles.templateTop}>
            <h1>爱心助力</h1>
          </div>
          <span className={styles.closeBtn} onClick={this.closeBord}>
            <img src={CLOSE}/>
          </span>

          <div className={styles.info}>
            <div className={styles.releaseHistory}>
              {
                this.state.recipientProjectList.map((item, index) => {
                  return (
                    <div className={styles.releaseItem}>
                      <img src={PIC} alt=""/>
                      <div className={styles.releaseItemText}>
                        <p>{item.title}</p>
                        <p className={styles.releaseItemSmall}>姓名：{item.name}</p>
                        <p className={styles.releaseItemSmall}>金额：{item.money}</p>
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>

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
