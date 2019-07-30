import React from 'react'
import css from './index.module.scss'

function Pic(props){
    return (
            <div>
                 <div className={css.pic}>
                <h2>商品详情</h2>
                     {
                         props.product_img1.map((item,index)=>
                                 <li key={index}>
                        <img src={item.bigImgUrl} alt=""/>
                                 </li>
                     )
                        }
             <p className={css.intro}>{props.message}</p>
                 </div>
                 <div className={css.returnNote}>
                        <h2>退货提示</h2>
                        <p>{props.detailList.returnNote}</p>
                 </div> 
                 <div className={css.package}>
                 <h2>包装清单</h2>
                 <img src={props.detailList.packageURL} alt=""/>
                 <p>{props.detailList.packageText}</p>
          </div>
            </div>
        );
}

export default Pic;