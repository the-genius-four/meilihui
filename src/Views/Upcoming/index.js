import React,{Component} from 'react'
import store from '../../Redux/store'
import {backgroundChange,backgroundNochange} from '../../Components/Tabbar/actionCreator'
class Upcoming extends Component{
    render(){
        return <div>
           Upcoming 
        </div>
    }
    componentWillMount(){
        store.dispatch(backgroundChange())
    }
    componentWillUnmount(){
        store.dispatch(backgroundNochange())
    }
}

export default Upcoming