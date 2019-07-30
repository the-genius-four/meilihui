const bannerReducer = (prevState = [], action) => {
    let {type,payload} = action
    switch(type) {
        case "getBanner":
            return [...prevState,...payload]
        case "removeBanner":
            return []
        default:
            return prevState
    }
}

export default bannerReducer