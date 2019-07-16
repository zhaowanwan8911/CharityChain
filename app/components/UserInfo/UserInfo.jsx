import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './UserInfo.scss'

// import PHOTO from './photo.jpg'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
          {
            this.props.userInfo.map((item, index) => {
              return (
                <p key={index}>
                  <span>{item.key}:</span>
                  <span>{item.value}</span>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(UserInfo))
