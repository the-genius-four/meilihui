import axios from 'axios'

const getBanner = () => {
    return axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5").then(res => {
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
    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1561516888190&summary=b0f8137d7343e8ca2bc219835f089746&platform_code=H5").then(res => {
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
const getHitarea = () => {
    return axios.get("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291&timestamp=1561540125833&summary=273778e1ff8d69c66fa90af3599776ca&platform_code=H5").then(res => {
        //console.log(res.data.resultList[0].data)
        return {
            type: 'getHitarea',
            payload: res.data.resultList[0].data
        }
    })
}
const removeHitarea = () => {
    return {
        type: 'removeHitarea',
        payload: []
    }
}

export {getBanner,removeBanner,getList,removeList,getHitarea,removeHitarea}