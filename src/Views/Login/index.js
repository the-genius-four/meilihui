import React,{Component} from 'react'
import store from '../../Redux/store'
import {NavLink} from 'react-router-dom'
import {HideTabbar,ShowTabbar} from '../../Components/Tabbar/actionCreator'
import css from './index.module.scss'
import {HideFooter,ShowFooter} from '../../Components/Footer/actionCreator'
class Login extends Component{
    render(){
        return (
            <div className={css.login}>
                <div className={css.loginMobile}>
                    <NavLink to="/index" className={css.back}>X</NavLink>
                    <div className={css.loginForm}>
                        <h1>
                            登录/注册
                            <span>注册即送2600元新人红包</span>
                        </h1>
                        <p className={css.error}>&nbsp;</p>
                        <div className={css.inputBox}>
                            <div className={css.inputItem}>
                                <input type="text" placeholder="手机号" maxLength="11" name="mobile" />
                            </div>
                        </div>
                        <div className={css.action}>
                            <div className={css.submit}>
                                <div className={css.default}>
                                    <span>提交</span>
                                </div>
                            </div>
                        </div>
                        <div className={css.loginSwitch}>
                            <div>
                                <NavLink to="/login">切换密码登录</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={css.loginJiont}>
                        <p className={css.itemsLogin}>
                            <NavLink to="/login" className={css.taobao}>
                                <span>淘宝登录</span>
                                <em>绑定淘宝</em>
                            </NavLink>
                            <NavLink to="/login" className={css.alipay}><span>支付宝登录</span></NavLink>
                            <NavLink to="/login" className={css.weibo}><span>微博登录</span></NavLink>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        //隐藏选项卡
        store.dispatch(HideTabbar())
        store.dispatch(HideFooter())
    }
    componentWillUnmount(){
        //显示选项卡
        store.dispatch(ShowTabbar())
        store.dispatch(ShowFooter())
    }
}

export default Login