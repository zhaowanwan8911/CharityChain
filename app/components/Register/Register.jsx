import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'

import styles from './Register.scss'
import {register} from "../../actions/login";

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donate: true,
      account: '',
      name: '',
      sex: '',
      job: '',
      contact: '',
      address: '',
      wallet_address: this.props.walletInfo.address,
      role:'donator',
    }
  }

  // toRegister = () => {
  //   const personalInfo = {
  //     name:'Jayne',
  //     role:'donator',
  //     gender:'女',
  //     profession: '程序员',
  //     phone: '13145645876',
  //     wallet_address: 'AL6YBSSi9rJwkxSHc3K6tq8Ze53Nji4aRP',
  //     address:'北京市海淀区',
  //   }
  //   this.props.register(personalInfo)
  // }
  setAccount = (e) =>{
    this.setState({
      account: e.target.value,
    })
  }
  setName = (e) =>{
    this.setState({
      name: e.target.value,
    })
  }
  setSex = (e) =>{
    this.setState({
      sex: e.target.value,
    })
  }
  setJob = (e) =>{
    this.setState({
      job: e.target.value,
    })
  }
  setContact = (e) =>{
    this.setState({
      contact: e.target.value,
    })
  }
  setAddress = (e) =>{
    this.setState({
      address: e.target.value,
    })
  }
  submit = () => {
    const personalInfo = {
      name:this.state.name,
      role:this.state.role,
      gender:this.state.sex,
      profession: this.state.job,
      phone: this.state.contact,
      wallet_address: this.state.wallet_address,
      address:this.state.address,
    }
    this.props.register(personalInfo)
  }
  setDonateTrue = () => {
    this.setState({
      donate: true,
      role:'donator',
      account: '',
      name: '',
      sex: '',
      job: '',
      contact: '',
      address: '',
    })
  }
  setDonateFalse = () => {
    this.setState({
      donate: false,
      role:'recipient',
      account: '',
      name: '',
      sex: '',
      job: '',
      contact: '',
      address: '',
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
              <div className={styles.form}>
                <div>
                  <div>账户: {this.state.wallet_address}</div>
                  <div>姓名:<input type="text" onChange={this.setName}/></div>
                  <div>性别:<input type="text" onChange={this.setSex}/></div>
                  <div>职业:<input type="text" onChange={this.setJob}/></div>
                  <div>联系方式:<input type="text" onChange={this.setContact}/></div>
                  <div>联系地址:<input type="text" onChange={this.setAddress}/></div>
                </div>
                <div className={styles.upload}>
                  <input type="file" name="file" id="file" />
                  <label for="file" >上传头像</label>
                  <img src="" height="200" width="300" alt="Image preview..."/>
                </div>
              </div>
              <div className={styles.done} onClick={this.submit}>完成</div>
            </div>
            :
            <div className={styles.donate}>
              <div className={styles.title}>
              <div className={styles.item2} onClick={this.setDonateTrue}>我是捐赠人</div>
                <div  className={classNames({
                  [styles.item1]: true,
                  [styles.checked]: this.state.donate === false,
                })} onClick={this.setDonateFalse}>我是受益人</div>
              </div>
              <div className={styles.form}>
                <div>
                  <div>账户:<input type="text" onChange={this.setAccount}/></div>
                  <div>姓名:<input type="text" onChange={this.setName}/></div>
                  <div>性别:<input type="text" onChange={this.setSex}/></div>
                  <div>职业:<input type="text" onChange={this.setJob}/></div>
                  <div>联系方式:<input type="text" onChange={this.setContact}/></div>
                  <div>联系地址:<input type="text" onChange={this.setAddress}/></div>
                </div>
                <div className={styles.upload}>
                  <input type="file" name="file" id="file" />
                  <label for="file" >上传头像</label>
                  <img src="" height="200" width="300" alt="Image preview..."/>
                </div>
              </div>
              <div className={styles.done} onClick={this.submit}>完成</div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: state.wallet.walletInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: bindActionCreators(register, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Register))
