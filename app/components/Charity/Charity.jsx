import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserInfo from '../UserInfo/UserInfo'

import styles from './Charity.scss'

class Charity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
    }
    this.userInfo = {
      name: {
        key: '姓名',
        value: '张之雅'

      },
      guardian: {
        key: '监护人',
        value: '张志国'

      },
      phone: {
        key: '联系方式',
        value: '18510601969'

      },
      homeAddress: {
        key: '联系地址',
        value: '北京市海淀区'

      },
    }
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll = (e) => {
    if (e.srcElement.scrollingElement.scrollTop > 100) {
      this.setState({
        hideNav: true,
      })
    } else {
      this.setState({
        hideNav: false,
      })
    }
  }

  render() {
    return (
      <div className={styles.charityWraper} style={this.state.hideNav ? { marginTop: '161px' } : { marginTop: '0' }}>
        <div className={styles.charityInfoBox}>
          <div className={styles.charityInfo}>
            <UserInfo userInfo={this.userInfo} />
          </div>
          <div className={styles.charityActive}>
            456
          </div>
        </div>
        <div className={styles.charityList}>
          list
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Charity))
