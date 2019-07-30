import React , {Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import css from './index.module.scss'
class Swiper extends Component{

    state={
      imgHeight: 180
    }
    render(){    
        return(
        <div className={css.swiper}>
            <WingBlank>
            <Carousel
              autoplay={true}
              infinite  
              dots={true}
              dotStyle={{
                width:"4px",
                height:"4px",
                backgroundColor:"gray"
            }}
            dotActiveStyle={{
                backgroundColor:"black",
                width:"4px",
                height:"4px",
            }}
            >
              {
                  this.props.swiperList.map((item,index)=>
                  <img src={item.smallImgUrl} alt="" key={index}
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
  
                  />      
                )
              }
            </Carousel>
          </WingBlank>      
        </div> 
        )
    }
}

export default Swiper