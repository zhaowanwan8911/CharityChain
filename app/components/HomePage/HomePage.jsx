import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { login } from '../../actions/login'
// import classNames from 'classnames'

import styles from './HomePage.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: null,
      selectedFileList: [],
      psword: '',
      hideNav: false,
      success: true,
    }
  }
  
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.loginInfo !== nextProps.loginInfo) {
      // this.loginInfoCheck(nextProps.loginInfo)
      this.loginInfoCheck(0)
    }
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

  loginInfoCheck = (userInfo) => {
    switch (userInfo) {
      case 0 :
        console.log(0)
        this.setState({
          success: false,
        })
        break
      case 1 :
        console.log(1)
        break
      case 2 :
        console.log(2)
        break
      default :
        break
    }
  }

  // 通过自定义按钮触发文件选择功能选择文件并加入数组
  choiceFile = () => {
    this.fileInput.click()
  }
  // 选择文件
  fileSelected = () => {
    this.setState({
      fileName: this.fileInput.files[0].name,
      selectedFileList: this.fileInput.files[0],
    })
  }
  // 输入密码
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      psword: value,
    })
  }
  // 登录
  login = () => {
    const formData = new FormData()
    formData.append('attachment', this.state.selectedFileList)
    // 提交所有信息
    console.log(this.state.selectedFileList)
    console.log(formData)
    console.log(this.state.psword)
    // this.props.login(formData, this.state.psword)
  }
  render() {
    return (
      <div className={styles.bodyWrapper} style={this.state.hideNav ? { marginTop: '161px' } : { marginTop: '0' }}>
        <div className={styles.swiperWrapper}>
          <div className={styles.fromWrapper}>
            <div className={styles.choiseWrapper}>
              <div className={styles.input}><span>{this.state.fileName || '打开钱包文件'}</span></div>
              <div
                ref={(input) => { this.uploadBtn = input }}
                onClick={this.choiceFile}
                className={styles.browseBtn}
              >
                  浏览
              </div>
              <input
                type="file"
                name="attachment"
                onChange={this.fileSelected}
                ref={(input) => { this.fileInput = input }}
                style={{ display: 'none' }}
                accept=""
                multiple
              />
            </div>
            <input
              type="password"
              placeholder="  请输入密码"
              value={this.state.psword}
              className={styles.input}
              onChange={this.handleChange}
            />
            <div className={styles.alert}>
              <span style={this.state.success ? {display: 'none'} : {display: 'block'}}>密码错误，重新输入！</span>
            </div>
            <div className={styles.submit} onClick={this.login}>登录</div>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.newsWrapper}>
            <div className={styles.newImg}>这里是放图片的</div>
            <div className={styles.newInfo}>
              <h4>图片+新闻篇</h4>
              <span className={styles.time}>2019.09.09</span>
              <h3>银河系基金会大使侯旭辉探访河南孟州</h3>
              <span className={styles.more}>> 阅读新闻</span>
            </div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blogImg}>这里是放图片的</div>
              <div className={styles.blogInfo}>
              <h4>图片+博客篇</h4>
              <span className={styles.time}>2019.09.09</span>
              <h3>银河系基金会大使侯旭辉的博客</h3>
              <p className={styles.text}>你是我患失患得的梦，我是你可有可无的人。毕竟这穿越山河的箭，刺的都是用情致疾的人。</p>
              <span className={styles.more}>> 阅读故事</span>
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <div className={styles.videoImg}>这里是放图片的</div>
              <div className={styles.videoInfo}>
              <h4>图片+视频篇</h4>
              <span className={styles.time}>2019.09.09</span>
              <h3>银河系基金会大使侯旭辉的爱心之旅</h3>
              <p className={styles.text}>我都寂寞多久了，还是没好，感觉全世界都在窃窃嘲笑，我能有多骄傲，不堪一击好不好，一碰到你我就被撂倒。</p>
              <span className={styles.more}>> 观看视频</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginInfo: state.loginInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login))
