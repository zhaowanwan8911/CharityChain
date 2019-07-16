import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './Nav.scss'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
    }
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
      <div className={styles.navWraper} style={this.state.hideNav ? { height: '60px', position: 'fixed', top: '0', left: '0', zIndex: '999' } : { height: '160px' }}>
        <div className={styles.logo} style={this.state.hideNav ? { display: 'none' } : { display: 'block' }}>嘿！朋友</div>
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
