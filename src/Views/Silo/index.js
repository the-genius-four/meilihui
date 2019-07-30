import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Crossborder from './Crossborder'
import Women from './Women'
import Men from './Men'
import Cosmetics from './Cosmetics'
import Lifestyle from './Lifestyle'
import Kids from './Kids'
import css from './index.module.scss'
class Silo extends Component{
    render(){
        return (
            <div className={css.bgColor}>
                <Route path="/silo/crossborder" component={Crossborder}></Route>
                <Route path="/silo/women" component={Women}></Route>
                <Route path="/silo/men" component={Men}></Route>
                <Route path="/silo/cosmetics" component={Cosmetics}></Route>
                <Route path="/silo/lifestyle" component={Lifestyle}></Route>
                <Route path="/silo/kids" component={Kids}></Route>
            </div>
        )
    }
}

export default Silo