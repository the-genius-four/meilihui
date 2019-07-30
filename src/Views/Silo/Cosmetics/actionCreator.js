import axios from 'axios'
const getBanner = () => {
    return axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5").then(res => {
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
    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1561517252449&summary=a4e6b63749e6c482422cd89aa6c0d3a5&platform_code=H5").then(res => {
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
const getcategoryList = () => {
    return axios.get("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1561535048499&summary=021ef521ce8428f56bdc48614f70c7c0&platform_code=H5").then(res => {
        //console.log(res.data.resultList[0].data)
        return {
            type: 'getcategoryList',
            payload: res.data.resultList[0].data
        }
    })
}
const removecategoryList = () => {
    return {
        type: 'removecategoryList',
        payload: []
    }
}
export {getBanner,removeBanner,getList,removeList,getcategoryList,removecategoryList}
