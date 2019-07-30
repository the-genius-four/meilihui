const FooterShow = (prevState=true,action)=>{
    let {type,payload} = action
    switch(type){
        case 'HideFooter':
            return payload;
        case 'ShowFooter':
            return payload;
        default :
        return prevState
    }
}
export default FooterShow