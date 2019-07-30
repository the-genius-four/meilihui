const hitareaReducer = (prevState = [], action) => {
    let {type,payload} = action
    switch(type) {
        case "getHitarea":
            return [...prevState,...payload]
        case "removeHitarea":
            return []
        default:
            return prevState
    }
}

export default hitareaReducer