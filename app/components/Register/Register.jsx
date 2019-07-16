import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import styles from './Register.scss'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donate: true,
    }
  }

  render() {
    return (
      <div className={styles.content}>
        {
          this.state.donate ?
            <div className={styles.donate}>
              <div className={styles.title}>
                <div className={styles.item}>我是捐赠人</div>
                <div className={styles.item}>我是受益人</div>
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
              <div className={styles.done}>完成</div>
              </form>
              
            </div>
            :
            <div className={styles.donate}>
              <div>
                <div>我是捐赠人</div>
                <div>我是受益人</div>
              </div>
              <div>
                <div>
                  <div>账户:</div>
                  <div>姓名:</div>
                  <div>性别:</div>
                  <div>职业:</div>
                  <div>联系方式:</div>
                  <div>联系地址:</div>
                </div>
                <div>
                  <input type="upload"/>
                  <div>头像预览</div>
                </div>
              </div>
              <div>完成</div>
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
