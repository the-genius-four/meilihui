const eventIconReducer = (prevState = false, action) => {
    let {type,payload} = action
    switch(type) {
        case "ShowEventIcon":
            return payload
        case "HideEventIcon":
            return payload
        default:
            return prevState
    }
}

export default eventIconReducer