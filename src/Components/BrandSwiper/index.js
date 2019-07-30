import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import css from './index.module.scss'
// import axios from 'axios'
class BrandSwiper extends Component{
    state={
    }
    render(){
        return (
            <div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    this.props.info.map((item,index)=>
                      <div className="swiper-slide" key={index}>
                        <div className={css.slideBox}>
                          <img src={item.fileUrl} alt={item.brandName} />
                          <div className={css.imgBox}>
                          </div>
                          <p>
                            <span>￥{item.price}</span>
                            <span>￥{item.marketPrice}</span>
                          </p>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween:10,
            freeMode: true,
          });


     }
}
export default BrandSwiper