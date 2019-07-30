import React,{Component} from 'react'
import store from '../../Redux/store'
import {NavLink} from 'react-router-dom'
import {HideTabbar,ShowTabbar} from '../../Components/Tabbar/actionCreator'
import {HideFooter,ShowFooter} from '../../Components/Footer/actionCreator'
import shopcar from '../../assets/shopcarpag.png'
import css from './index.module.scss'
// import axios from 'axios'
class Shoppingcart extends Component{

    state={
        productsList:[],
        isShow:false
    }
    render(){
        return <div>
             <div>
                    <ul className={css.icon}>
                        <li className={css.left}><NavLink to='/index'><i className="iconfont icon-iconset0415"></i></NavLink></li>
                        <li className={css.middle}><NavLink to='./'>购物车</NavLink></li>
                        <li className={css.right} onClick={()=>this.hanleClick()}><i className="iconfont icon-more"></i></li>
                    
                        {
                            this.state.isShow?
                            <ul className={css.show}>
                                  <span></span>
                                  <li><NavLink to='./index' replace>首页</NavLink></li>
                                  <li><NavLink to='./shoppingcart' replace>购物袋</NavLink></li>
                                  <li><NavLink to='./login' replace>个人中心</NavLink></li>
                            </ul>
                            :null
                        }
                    </ul>
             </div>
                    {/* 购物车图片以及标题 */}
             <div className={css.shopcarimg}>
                    <img src={shopcar} alt=""/>
                    <p>空空如也~</p>
                    <div><NavLink to='./index'>去抢购</NavLink></div>
                    {/* <h3>为你推荐</h3> */}
             </div>
             {/* {this.state.productsList.map((mvp)=> (
                <div key={mvp.productId} className={css.products}>
                         <h6>{mvp.productName}</h6>
                         <p><span>￥{mvp.price}</span>&nbsp;&nbsp;&nbsp;<i>￥{mvp.marketPrice}</i>&nbsp;&nbsp;&nbsp;{mvp.itemPriceDto.discount}折</p>
                     </div>
                </div>
            ))} */}
        
        </div>
    }
    
    hanleClick=()=>{
        
        this.setState({
         isShow : !this.state.isShow
        })
    
    }
    // componentDidMount(){
    //     axios.get('http://www.mei.com/appapi/product/maybeLike/v3?pageIndex=1').then(res => {
    //    // console.log(res.data)
    //     this.setState({
    //    productsList : res.data.products  
    //   })
    //  })
    // } 

    componentWillMount(){
        store.dispatch(HideTabbar())
    }
    componentWillUnmount(){
        store.dispatch(HideFooter())
        store.dispatch(ShowTabbar())
        store.dispatch(ShowFooter())
    }
}
  

export default Shoppingcart