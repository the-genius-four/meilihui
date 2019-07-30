import React,{Component} from 'react'
import css from './index.module.scss'
import axios from 'axios'
import BrandSwiper from '../../../Components/BrandSwiper'
class TodayComing extends Component{
    state={
        newProductTop10:[],
    }
    render(){
        return <div>
            <div className={css.all}>
                {
                    this.state.newProductTop10.length?
                    <BrandSwiper info={this.state.newProductTop10}/>
                    :null
                }
            </div>
        </div>
    }
    componentDidMount(){
        axios.get('http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000000853').then(res=>{
            console.log(res.data)
            this.setState({
                newProductTop10:res.data.body.newProductTop10
            })
          })

    }
}
export default TodayComing