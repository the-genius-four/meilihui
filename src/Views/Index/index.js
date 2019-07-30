import React from 'react'
import {Carousel} from 'antd-mobile';
import axios from 'axios'
import css from './index.module.scss'
import img from '../../assets/1.png'
import newEvent from '../../assets/index/下载.png'
import hotBrand from '../../assets/index/hotBrand.png'
import more from '../../assets/index/moreEvent.png'
import moreleft from '../../assets/index/brandMove.png'
import moreright from '../../assets/index/shangxin.png'

class index extends React.Component{



  state = {
    loading:true,
    homePageList:[],
    animating:true,
    newEventList:[],
    hotBrandList:[],
    newList:[]
  }

  render(){
    return <div>
          
 
        <Carousel
          autoplay={true}
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

          key={this.state.homePageList.length}
        >
          {this.state.homePageList.map((val) => (
            <div key={val.id} className={css.homePage}>
                <img src={val.main_image} alt=""/>
                <div className={css.homePageList}>
                    <h3>{val.main_title}</h3>
                    <p>{val.sub_title}</p>
                    <p>{val.description}</p>
                </div>
            </div>
          ))}
        </Carousel>

           <div className={css.logoimg}>
             <img src={img} alt=""/>
           </div>
                
                {/* {
                  this.state.newList.length?
                   <div className={css.NewArrivalEnter}>
                       <div className={css.left}>
                             <div className={css.title}>
                                <p>{this.state.newList[0].main_title}&nbsp;&nbsp;&nbsp;{this.state.newList[0].sub_title}</p>  
                             </div>
                             <div className={css.items}>
                                 <div className={css.item}>
                                     <img src={this.state.newList[0].products[0].picUrl} alt=""/>
                                     <div className={css.img}>{this.state.newList[0].products[0].tag}</div>     
                                 </div>
                                 <div className={css.item}>
                                    <img src={this.state.newList[0].products[1].picUrl} alt=""/>
                                    <div className={css.img}>{this.state.newList[0].products[1].tag}</div>
                                 </div>
                             </div>
                       </div>
 
                       <div className={css.right}>
                             <div className={css.title}>
                                <p>{this.state.newList[1].main_title}&nbsp;&nbsp;&nbsp;{this.state.newList[1].sub_title}</p>
                             </div>
                             <div className={css.items}>
                                 <div className={css.item}>
                                     <img src={this.state.newList[1].products[0].picUrl} alt=""/>
                                     <div className={css.img}>{this.state.newList[1].products[0].tag}</div>
                                 </div>
                                 <div className={css.item}>  
                                     <img src={this.state.newList[1].products[1].picUrl} alt=""/>
                                     <div className={css.img}>{this.state.newList[1].products[1].tag}</div>
                                 </div>
                             </div>
                       </div>
                  </div>
                  :null
                } */}

           <div className={css.newEventimg}>
             <img src={newEvent} alt=""/>
           </div>

            {this.state.newEventList.map((mvp)=> (
                <div key={mvp.eventId} className={css.newEvent}>
                    <img src={mvp.imageUrl} alt=""/>
                    <div className={css.newEventList}>  
                         <h3>{mvp.englishName}</h3>
                         <p>{mvp.chineseName}</p>
                         <p>{mvp.discountText}</p>
                     </div>
                </div>
            ))}

            <div className={css.hotBrandimg}>
              <img src={hotBrand} alt=""/>
           </div>

           
           {this.state.hotBrandList.map((rel)=> (
                <div key={rel.eventId} className={css.hotBrand}>
                    <img src={rel.imageUrl} alt=""/>
                    <div className={css.hotBrandList}>
                         <h3>{rel.englishName}</h3>
                         <p>{rel.chineseName}</p>
                         <p>{rel.discountText}</p>
                     </div>
                </div>
            ))}

          <div className={css.moreimg}>
              <img src={more} alt=""/>
           </div>

           <div className={css.morelistimg}>
              <img src={moreleft} alt=""/>
              <img src={moreright} alt=""/>
           </div>
    </div>
    
  }

   
  

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },2000)


    axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res => {
       //  console.log(res.data.banners)
         this.setState({
          homePageList : res.data.banners
         })
         axios.get('http://www.mei.com/appapi/ninenew/operational/v1?credential=').then(res => {
        // console.log(res.data.show2)
         this.setState({
          newList:res.data.show2
         })
         axios.get('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1560386934806&summary=238534f137a499197f739299641840ff&platform_code=H5').then(res => {
          // console.log(res.data.lists)
           this.setState({
            newEventList : res.data.lists[0].events,
            hotBrandList : res.data.lists[1].events
           })
      
        })
      })
    })
   }

}


export default index

