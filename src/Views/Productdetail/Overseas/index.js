import React from 'react'
import css from './index.module.scss'
function Overseas(props){
    return(
         <div>
                <div className={css.overseas}>
                        <img src={props.detailList.overseas_tip_url} alt=""/>
                        <img src={props.detailList.overseas_tip_url} alt=""/>
                        <img src={props.detailList.postSellUrls} alt=""/>
                </div>
            </div>
    )
}

export default Overseas;