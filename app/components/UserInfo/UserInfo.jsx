import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './UserInfo.scss'
import {getPersonalInfo} from "../../actions/login";

// import PHOTO from './photo.jpg'
// gender: "女"
// homeAddress: "北京市海淀区"
// name: "Jayne"
// phone: "13145645876"
// profession: "程序员"
// role: "donator"
// walletAddress: "AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP"
class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfo:''
    }
  }
  componentDidMount = () => {
    this.props.getPersonalInfo(this.props.walletInfo.address,this.props.walletInfo.role,)
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.personalInfo !== nextProps.personalInfo) {
      this.setState({personalInfo: nextProps.personalInfo})
    }
  }
  render() {
    return (
      <div className={styles.user}>
        <div className={styles.photoWraper}>
          {/* <img src={PHOTO} alt="" className={styles.photo}/> */}
        </div>
        <div className={styles.userInfo}>
          <div className={styles.edit}>
            <span>编辑</span>
          </div>
          <p>
            <span>姓名:</span>
            <span>{this.state.personalInfo.name}</span>
          </p>
          <p>
            <span>性别:</span>
            <span>{this.state.personalInfo.gender}</span>
          </p>
          <p>
            <span>职业:</span>
            <span>{this.state.personalInfo.profession}</span>
          </p>
          <p>
            <span>联系方式:</span>
            <span>{this.state.personalInfo.phone}</span>
          </p>
          <p>
            <span>地址:</span>
            <span>{this.state.personalInfo.homeAddress}</span>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: state.wallet.walletInfo,
    personalInfo: state.login.personalInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonalInfo: bindActionCreators(getPersonalInfo, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(UserInfo))
