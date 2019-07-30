import React from 'react'
import css from './index.module.scss'
function Info(props){
    return(
         <div className={css.info}>
                <h1>{props.detailList.name}</h1>
                    <p className={css.marketPrice}>
                        ￥{props.detailList.marketPrice}
                    </p>
                        <span className={css.price}>￥{props.detailList.price}</span>
                        <span className={css.discount}>{props.detailList.discount}</span>
                        <span className={css.discount} >包邮含税</span>
                    <p>
                        <span className={css.warehouse_name}>
                            {props.detailList.warehouse_name}
                        </span>
                        <span className={css.deliver_date}>
                            {props.detailList.deliver_date}
                        </span>
                     </p>
            </div>
    )
}

export default Info ;