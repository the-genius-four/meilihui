import React,{Component} from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import css from './index.module.scss'
import { Carousel } from 'antd-mobile'
import {connect} from 'react-redux'
class SwiperBanner extends Component {

    render() {
        return (
            <Carousel
                autoplay={true}
                key={this.props.banner}
                infinite
                dotStyle={{
                    width:"5px",
                    height:"5px",
                    borderRadius: "0",
                    marginBottom:"20px"
                }}
                dotActiveStyle={{
                    backgroundColor:"white",
                    width:"15px",
                    height:"5px",
                    borderRadius:"0",
                    marginBottom:"20px"
                }}
                >
                {this.props.banner.map(item => (
                    <div className={css.banner} key={item.id}>
                        <div className={css.bannerImg}>
                            <img
                                src={item.main_image} 
                                alt=""
                                style={{width:'100%',verticalAlign:'top'}}
                                onLoad={()=>{window.dispatchEvent(new Event('resize'))}}    
                            />
                        </div>
                        <div className={css.bannerSlogan}>
                            <h2 className={css.h2}>{item.main_title}</h2>
                            <p className={css.p}>{item.sub_title}</p>
                            <p className={css.p}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner,
    }
}
export default connect(mapStateToProps,)(SwiperBanner)
