import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'

import styles from './Register.scss'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donate: true,
    }
  }

  setDonateTrue = () => {
    this.setState({
      donate: true,
    })
  }
  setDonateFalse = () => {
    this.setState({
      donate: false,
    })
  }
  render() {
    return (
      <div className={styles.content}>
        {
          this.state.donate ?
            <div className={styles.donate}>
              <div className={styles.title}>
                <div className={classNames({
                  [styles.item1]: true,
                  [styles.checked]: this.state.donate === true,
                })} onClick={this.setDonateTrue}>我是捐赠人</div>
                <div className={styles.item2} onClick={this.setDonateFalse}>我是受益人</div>
              </div>
              <form action="">
              <div className={styles.form}>
                <div>
                  <div>账户:<input type="text"/></div>
                  <div>姓名:<input type="text"/></div>
                  <div>性别:<input type="text"/></div>
                  <div>职业:<input type="text"/></div>
                  <div>联系方式:<input type="text"/></div>
                  <div>联系地址:<input type="text"/></div>
                </div>
                <div className={styles.upload}>
                  <input type="file" name="file" id="file" />
                  <label for="file" >上传头像</label> 
                  <img src="" height="200" width="300" alt="Image preview..."/>
                </div>
              </div>
                <div className={styles.done}>
                  <input type="submit" value="完成" ></input>
                </div>
                
              </form>
            </div>
            :
            <div className={styles.donate}>
              <div className={styles.title}>
              <div className={styles.item2} onClick={this.setDonateTrue}>我是捐赠人</div>
                <div  className={classNames({
                  [styles.item1]: true,
                  [styles.checked]: this.state.donate === false,
                })} >我是受益人</div>
              </div>
              <form action="">
              <div className={styles.form}>
                <div>
                  <div>账户:<input type="text"/></div>
                  <div>姓名:<input type="text"/></div>
                  <div>性别:<input type="text"/></div>
                  <div>职业:<input type="text"/></div>
                  <div>联系方式:<input type="text"/></div>
                  <div>联系地址:<input type="text"/></div>
                </div>
                <div className={styles.upload}>
                  <input type="file" name="file" id="file" />
                  <label for="file" >上传头像</label> 
                  <img src="" height="200" width="300" alt="Image preview..."/>
                </div>
              </div>
                <div className={styles.done}>
                  <input type="submit" value="完成" ></input>
                </div>
                
              </form>
            </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Register))
