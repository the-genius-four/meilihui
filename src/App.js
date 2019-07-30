import React,{Component} from 'react';
import './App.css'
import Footer from './Components/Footer'
import Tabbar from './Components/Tabbar'
import store from './Redux/store';
// import css from './Components/Tabbar/index.module.scss'
class App extends Component{
  state={
    fixed:false,
    TabbarShow:store.getState().TabbarShow,
    FooterShow:store.getState().FooterShow
  }
  render(){
    return (
      <div>
        {
          this.state.TabbarShow?
          <Tabbar myfixed={this.state.fixed}/>
          : null
        }
        {
          this.props.children
        }
        {
        this.state.TabbarShow?
        <Footer/>
        :null
      }
      </div>
    )
  }
  componentWillMount(){
    window.addEventListener("scroll",this.handleScroll)
    store.subscribe(()=>{
      // console.log('Store有跟新',store.getState())
      this.setState({
        TabbarShow:store.getState().TabbarShow,
        fixed:store.getState().TabbarBackgroundReducer,
        FooterShow:store.getState().FooterShow
      })
    })
  }
  handleScroll=()=>{
    let scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>50){
      // console.log('1111')
      this.setState({
        fixed:true
      })
    }else{
      // console.log('2222')
      this.setState({
        fixed:false
      })
    }
  }
}
export default App;
