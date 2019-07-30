import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
import '../../../assets/iconfont/iconfont.css'
class Footbar extends Component{
    render(){
        return(
            <div>
                <ul className={css.Footerbar}>
                    <li><span className="iconfont icon-gouwu"></span><NavLink to="/shoppingcart">购物袋</NavLink></li>
                    <li><NavLink to="/login">加入购物车</NavLink></li>
                    <li><NavLink to="/login">立即购买</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Footbar