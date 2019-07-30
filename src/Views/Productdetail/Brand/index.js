import React,{Component} from 'react'
import css from './index.module.scss'
class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand:false
         };
    }
    render() {
        return (
            <div>
            <div className={css.brand}>
            <h2>{this.props.detailList.brand}<span>品牌主页</span></h2>
            {   
                !this.state.brand?
                <div>
                <span className={css.sanjiao}></span>
                <span className={css.more} onClick={this.handleClick}
                >MORE</span></div>:
                null
            }
            
            {
                this.state.brand?
                <p>{this.props.detailList.brand_story}</p>:
                null
            }
            </div>
            </div>
        );
    }
    handleClick=()=>{
        this.setState({
            brand:!this.state.brand
        })
    }
}

export default Brand;