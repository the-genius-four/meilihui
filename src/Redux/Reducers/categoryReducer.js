const categoryReducer = (prevState = [], action) => {
    let {type,payload} = action
    switch(type) {
        case "getcategoryList":
            return [...prevState,...payload]
        case "removecategoryList":
            return []
        default:
            return prevState
    }
}

export default categoryReducer