import React,{Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'
class BrandTop extends Component{
    state={
        brankinfo:null,
        totilinfo:null,
        packUp:false,
    }
    render(){
        return <div>{
                    this.state.brankinfo?
                    <div className={css.brank}>
                        <img src={this.state.brankinfo.brandDetail.brandPageImage} alt={this.state.brankinfo.brandDetail.brandName}/>
                        <h2>{this.state.brankinfo.brandDetail.brandName}</h2>
                    </div>
                    :null
                    }
                    {
                        this.state.totilinfo?
                        <div className={css.totil}>
                            <span>在售商品<em>{this.state.totilinfo.onSaleTotal}</em>件</span>
                            <span>上新<em>{this.state.totilinfo.newTotal}</em>件</span>
                        </div>
                        :null
                    }
                    {
                    this.state.brankinfo?
                    <div className={css.summery}>
                        <p>{this.state.brankinfo.brandDetail.brandStoryText}</p>
                        <span onClick={()=>this.handleClick()} className={this.state.packUp?css.pack:''}>{this.state.packUp?'更多':'收起'}</span>
                    </div>
                    :null
                    }
        </div>
    }
    componentDidMount(){
        axios.get('http://www.mei.com/appapi/brand/viewCms/v3?logoId=3616200100000000304').then(res=>{
            console.log(res.data.body)
            this.setState({
                brankinfo:res.data.body
            })
        })
        axios.get('http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000000304').then(res=>{
            console.log(res.data.body)
            this.setState({
                totilinfo:res.data.body
            })
        })
    }
    handleClick=()=>{
        this.setState({
            packUp:!this.state.packUp,
        })
    }
}
export default BrandTop