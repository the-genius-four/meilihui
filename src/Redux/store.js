import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import bannerReducer from './Reducers/bannerReducer'
import listReducer from './Reducers/listReducer'
import eventIconReducer from './Reducers/eventIconReducer'
import TabbarReducer from './Reducers/TabbarReducer'
import TabbarBackgroundReducer from './Reducers/TabbarBackgroundReducer'
import categoryReducer from './Reducers/categoryReducer'
import hitareaReducer from './Reducers/hitareaReducer'
import FooterShow from './Reducers/FooterReducer'
const reducer = combineReducers({
    banner: bannerReducer,
    list: listReducer,
    eventIconShow: eventIconReducer,
    TabbarShow:TabbarReducer,
    TabbarBackgroundReducer:TabbarBackgroundReducer,
    categoryList: categoryReducer,
    hitarea: hitareaReducer,
    FooterShow:FooterShow
})

// const store = createStore(reducer,applyMiddleware(promiseMiddleware))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

export default store
