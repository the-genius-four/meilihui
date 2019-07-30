import React,{Component} from 'react'
import BrandTop from './BrandTop'
import TodayComing from './TodayComing'
import store from '../../Redux/store'
import {HideTabbar,ShowTabbar} from '../../Components/Tabbar/actionCreator'
class Brand extends Component{
    render(){
        return <div>
            <BrandTop />
            <TodayComing />
        </div>
    }
    componentWillMount(){
        store.dispatch(HideTabbar())
    }
    componentWillUnmount(){
        store.dispatch(ShowTabbar())
    }
}
export default Brand