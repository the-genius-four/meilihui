import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class Tabbar extends Component{
    render(){
        return <div>
            <div className={(this.props.myfixed?css.fixed:'')+" "+ css.all}>
                <div className={css.top}>
                    <ul>
                        <li className={css.left}><NavLink to='/login'>登录</NavLink></li>
                        <li className={css.middle}><strong><span className={css.iconfont}>&#xe68d;</span>GUCCI复古回流 低至3折</strong></li>
                        <li className={css.right}><NavLink to='/shoppingcart'><span className={css.iconfont}>&#xe60e;</span></NavLink></li>
                    </ul>
                </div>
                <div className={css.menu}>
                    <ul>
                        <li><NavLink to='/index' replace activeClassName={css.active}>推荐</NavLink></li>
                        <li><NavLink to='/silo/crossborder' replace activeClassName={css.active}>海外</NavLink></li>
                        <li><NavLink to='/silo/women' replace activeClassName={css.active}>女生</NavLink></li>
                        <li><NavLink to='/silo/men' replace activeClassName={css.active}>男士</NavLink></li>
                        <li><NavLink to='/silo/cosmetics' replace activeClassName={css.active}>美妆</NavLink></li>
                        <li><NavLink to='/silo/lifestyle' replace activeClassName={css.active}>家居</NavLink></li>                       
                        <li><NavLink to='/silo/kids' replace activeClassName={css.active}>婴童</NavLink></li>
                        <li className={css.last}><NavLink to='/upcoming' replace activeClassName={css.active}>即将上新</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}
export default Tabbar