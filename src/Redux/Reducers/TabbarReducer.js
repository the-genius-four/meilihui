
const TabbarReducer = (prevState=true,action)=>{
    let {type,payload} = action
    switch(type){
        case 'HideTabbar' :
            return payload;
        case 'ShowTabbar' :
            return payload;
        default :
            return prevState
    }
}
export default TabbarReducer