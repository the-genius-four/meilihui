const HideFooter = ()=>({
    type:'HideFooter',
    payload:false
})
const ShowFooter = ()=>({
    type:'ShowFooter',
    payload:true
})
export {HideFooter,ShowFooter}