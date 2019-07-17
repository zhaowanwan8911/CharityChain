import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'
import { setWalletInfo } from '../../actions/wallet'
import { login } from '../../actions/login'
// import classNames from 'classnames'
import newsImg from './news.jpeg';
import blogImg from './blog.jpg';
import videoImg from './video.jpg';

import styles from './HomePage.scss'
import Sleep from "../../constants/ont-wallet/sleep";
import FileHelper from "../../constants/ont-wallet/file-generate-and-get";
import GetWalletFileMsg from "../../constants/ont-wallet/info";


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: null,
      selectedFileList: [],
      psword: '',
      hideNav: false,
      success: true,
      roleName: '捐赠者',
    }
    this.list = [
      {name: '捐赠者'},
      {name: '求助者'},
      {name: '慈善机构'},
      {name: '执行机构'},
      {name: '供应商'}
    ]
      
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.personalInfo !== nextProps.personalInfo) {
      let path
      if(nextProps.personalInfo.registered === "true"){
        path = '/recipients'

      }else{
        path = '/register'
      }
      this.props.history.push(path)
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
  // 选择角色
  selectRole = (item) => {
    this.setState({
      roleName: item,
    })
  }
  // 登录
  login = () => {
    Sleep.sleep(200).then(() => {
      FileHelper.readWalletFile(this.state.selectedFileList).then( ($walletFile) => {
        if($walletFile) {
          let info = GetWalletFileMsg.decryptWalletFile($walletFile, this.state.psword)
          if(info.isGetInfo) {
            const Address = info.ontid.substring(8)
            const walletInfo = {
              address: Address,
              walletFile: this.state.selectedFileList,
            }
            this.props.setWalletInfo(walletInfo)
            this.props.login(Address)

          }else{
            console.log(info)
          }
        }
      })
    })
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
              placeholder="请输入密码"
              value={this.state.psword}
              className={styles.input}
              onChange={this.handleChange}
            />
            {/* <div className={styles.alert}>
              <span style={this.state.success ? {display: 'none'} : {display: 'block'}}>密码错误，重新输入！</span>
            </div> */}
            <div className={styles.roleSelect}>
              <ul>
                {
                  this.list.map((item, index) => {
                    return(
                      <li
                        className={classNames({
                          [styles.listItem]: true,
                          [styles.itemActive]: this.state.roleName == item.name,
                        })}
                        key={index}
                        onClick={() => {this.selectRole(item.name)}}
                      >
                        <div className={classNames({
                          [styles.drow]: true,
                          [styles.drowActive]: this.state.roleName == item.name,
                        })}>
                          &nbsp;
                        </div>
                        {item.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.submit} onClick={this.login}>登录</div>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.newsWrapper}>
            <div className={styles.newImg}>
              <img src={newsImg} alt=""/>
            </div>
            <div className={styles.newInfo}>
              <h4>图片+新闻篇</h4>
              <span className={styles.time}>2019.09.09</span>
              <h3>银河系基金会大使侯旭辉探访河南孟州</h3>
              <span className={styles.more}>> 阅读新闻</span>
            </div>
          </div>
          <div className={styles.blogWrapper}>
            <div className={styles.blogImg}>
              <img src={blogImg} alt=""/>
            </div>
            <div className={styles.blogInfo}>
              <h4>图片+博客篇</h4>
              <span className={styles.time}>2019.09.09</span>
              <h3>银河系基金会大使侯旭辉的博客</h3>
              <p className={styles.text}>你是我患失患得的梦，我是你可有可无的人。毕竟这穿越山河的箭，刺的都是用情致疾的人。</p>
              <span className={styles.more}>> 阅读故事</span>
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <div className={styles.videoImg}>
              <img src={videoImg} alt=""/>
            </div>
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
    walletInfo: state.wallet.walletInfo,
    personalInfo: state.login.personalInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setWalletInfo: bindActionCreators(setWalletInfo, dispatch),
    login: bindActionCreators(login, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage))
