import React,{Component} from 'react'
import css from './index.module.scss'

function Parameter(props){
    return(
         <div>      
            <div className={css.parameter}>
            <h2>商品参数</h2>
            <ul  className={css.infomation}>
                {
                    props.attributesList.map((item,index)=>
                        <li key={index}>
                            <span className={css.name}>{item.name}</span>
                             <span className={css.value}>{item.value}</span>
                        </li>    
                    )
                }
            </ul> 
         </div>
            </div>
    )
}

export default Parameter;