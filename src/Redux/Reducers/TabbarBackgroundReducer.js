const TabbarBackgroundReducer = (prevState=false,action)=>{
    let{type,payload} = action
    switch(type){
        case 'backgroundChange' :
            return payload;
        case 'backgroundNochange':
            return payload;
        default :
            return prevState
    }
}
export default TabbarBackgroundReducer