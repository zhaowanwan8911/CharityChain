import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './Nav.scss'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navList = [
      {
        name: '首页',
        url: '',
      },
      {
        name: '交易详情',
        url: '',
      },
      {
        name: '影响力',
        url: '',
      },
      {
        name: '相关机构',
        url: '',
      },
      {
        name: '联系我们',
        url: '',
      },
    ]
  }

  render() {
    return (
      <div className={styles.navWraper}>
        <div className={styles.navTop}>
          {
            this.navList.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={item.url}>
                    {item.name}
                  </NavLink>
                </div>
              )
            })
          }
        </div>
        <div className={styles.navBto}>
          个人钱包
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Nav))
