const HideTabbar = ()=>({
    type:'HideTabbar',
    payload:false
})
const ShowTabbar =()=>({
    type:'ShowTabbar',
    payload:true
})
const backgroundChange = ()=>({
    type:'backgroundChange',
    payload:true
})
const backgroundNochange = ()=>({
    type:'backgroundNochange',
    payload:false
})
export {HideTabbar,ShowTabbar,backgroundChange,backgroundNochange}