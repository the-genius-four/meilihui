import React,{Component} from 'react'
import css from './index.module.scss'
class Footer extends Component{
    render(){
        return <div>
            <div className={css.footer}>
                <a href='https://www.baidu.com/' className={css.top}>400-664-6698</a>
                <div className={css.list}>
                    <a href='https://www.taobao.com/'>首页</a>
                    <a href='https://www.jd.com/'>客户端</a>
                    <a href='https://www.tmall.com/'>登录</a>
                    <a href='https://www.baidu.com/'>注册</a>
                </div>
                <p>浙IPC备16004860号-1</p>
            </div>
        </div>
    }
}
export default Footer