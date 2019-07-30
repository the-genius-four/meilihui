import React,{Component} from 'react'
import css from './index.module.scss'
import '../../../assets/iconfont/iconfont.css'
import {NavLink} from 'react-router-dom'
class Barbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow:false,
      navTop: false
     };
     this.$tab = null;
     this.offsetTop = 0;
  }

  render() {
    return (
        <div>
            <ul className={(this.state.navTop?css.fixed:'')+" "+ css.Barbar} ref="tab">
              <li>
                <NavLink to='./index'><span className="iconfont">&#xe726;</span></NavLink>
              </li>

              <li>
                  <p>{this.props.detailList.brand}
                    <span>
                      ￥{parseFloat(this.props.detailList.price).toLocaleString()}
                    </span>
                  </p>
   
              </li>

              <li>
                  <span className="iconfont" onClick={this.handleClick}>&#xe637;</span>
              </li>
              {
                this.state.isShow?
                <ul className={css.hidelist}>
                  <span></span>
                  <li><NavLink to="/index" className={css.write}>首页</NavLink></li>
                  <li><NavLink to="/shoppingcart" className={css.write}>购物袋</NavLink></li>
                  <li><NavLink to="/login" className={css.write}>个人中心</NavLink></li>
                </ul>
                :null
              } 
            </ul>
                 
        </div>
    );
  }
  componentDidMount(){
    this.$tab = this.refs.tab;
    if(this.$tab){
      this.offsetTop = this.$tab.offsetTop;
      window.addEventListener('scroll',this.handleScroll);
    }
  }
  handleScroll=()=>{
    let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    if(!this.state.navTop && sTop >= this.offsetTop){
       this.setState({
         navTop: true
       })
    }

    if(sTop < this.offsetTop){
       this.setState({
         navTop:false
       })
    }
  }

  handleClick=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
} 


export default Barbar;