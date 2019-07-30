import axios from 'axios'
const getBanner = () => {
    return axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5").then(res => {
        //console.log(res.data)
        return {
            type: 'getBanner',
            payload: res.data.banners
        }
    })
}
const removeBanner = () => {
    return {
        type: 'removeBanner',
        payload: []
    }
}
const getList = () => {
    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1561468994515&summary=2371325a50abad054f3fc126a7f1211e&platform_code=H5").then(res => {
        //console.log(res.data)
        return {
            type: 'getList',
            payload: res.data.eventList
        }
    })
}
const removeList = () => {
    return {
        type: 'removeList',
        payload: []
    }
}
const ShowEventIcon = () => ({
    type: "ShowEventIcon",
    payload: true
})
const HideEventIcon = () => ({
    type: "HideEventIcon",
    payload: false
})

export {getBanner,removeBanner,getList,removeList,ShowEventIcon,HideEventIcon}
