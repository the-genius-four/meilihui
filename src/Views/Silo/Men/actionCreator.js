import axios from 'axios'
const getBanner = () => {
    return axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5").then(res => {
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
    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1561516550763&summary=abd3adb5c7aaa4577c7635db158749f0&platform_code=H5").then(res => {
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

export {getBanner,removeBanner,getList,removeList}
