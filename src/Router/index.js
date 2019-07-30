import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Index from '../Views/Index'
import Login from '../Views/Login'
import Newmembers from '../Views/Newmembers'
import Productlist from '../Views/Productlist'
import Shoppingcart from '../Views/Shoppingcart'
import Silo from '../Views/Silo'
import Upcoming from '../Views/Upcoming'
import Brand from '../Views/Brand'
import {Provider} from 'react-redux'
import store from '../Redux/store'
const router =(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/newmembers" component={Newmembers} />                   
                    <Route path="/productlist" component={Productlist} />
                    <Route path="/shoppingcart" component={Shoppingcart} />
                    <Route path="/silo" component={Silo} />
                    <Route path="/upcoming" component={Upcoming} />                  
                    <Route path='/brand' component={Brand} />
                    <Redirect from='/' to='/index' />
                </Switch>
            </App>
        </HashRouter>
    </Provider>
    )
    
export default router