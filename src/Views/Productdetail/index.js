import React,{Component} from 'react'
import Swiper from './Swiper/index'
import Barbar from './Barbar'
import SmallBar from './SmallBar'
import store from '../../Redux/store'
import {HideTabbar,ShowTabbar} from '../../Components/Tabbar/actionCreator'
import {HideFooter,ShowFooter} from '../../Components/Footer/actionCreator'
import axios from 'axios'
import Info from './Info'
import Parameter from './Parameter'
import Timeover from './Timeover'
import Pic from './Pic'
import Brand from './Brand'
import Overseas from './Overseas'
import Footbar from './Footbar'
class Productdetail extends Component{
    state={
        swiperList:[],
        detailList:[],
        visible: false, 
        placement: 'bottom',
        height:'4.2rem',
        attributesList:[],
        dotPosition: 'bottom',
        service_labels:[],
        product_img1:[],
        message:null,
        top: 0, 
 
    }
    render(){
        return (
            <div style={{background:'white'}}>
                <Barbar
                detailList={this.state.detailList}
                />
                <SmallBar/>
                <Swiper 
                dotPosition={this.state.dotPosition}
                swiperList={this.state.swiperList}
                detailList={this.state.detailList}
                />         
                <Info
                detailList={this.state.detailList}
                /> 
                <Timeover/>
                <Parameter
                attributesList={this.state.attributesList} 
                /> 
                <Pic
                product_img1={this.state.product_img1}
                detailList={this.state.detailList}
                message={this.state.message}
                />
                <Brand
                detailList={this.state.detailList}
                />
                <Overseas
                detailList={this.state.detailList}
                />
                <Footbar/>
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
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        axios.get('http://www.mei.com/appapi/product/detail/v3?categoryId=2042204290000006476&productId=2120212099000072561&platform_code=H5&timestamp=1561448446407&summary=fe373c7a462478d404fd20e75687355d').then((res)=>{
            // console.log(res.data.infos)
            this.setState({
                swiperList:res.data.infos.images,
                detailList:res.data.infos,
                attributesList:res.data.infos.description.attributesList,
                service_labels:res.data.infos.service_labels,
                product_img1:res.data.infos.description.product_img1,
                message:res.data.infos.description.message
            })
        })
    }
    
}

export default Productdetail