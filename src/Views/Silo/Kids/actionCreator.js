import axios from 'axios'
const getBanner = () => {
    return axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5").then(res => {
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
    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1561517095073&summary=932f3821381c528afb4b427665288663&platform_code=H5").then(res => {
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
    return axios.get("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1561537601352&summary=39d5d6a1060c928be2dce8806b687de3&platform_code=H5").then(res => {
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
