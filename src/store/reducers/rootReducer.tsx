const initState = {
}

type Act = {
    type: string,
    val: string | number
}

const rootReducer = (state = initState, action: Act) => {
    return state
}

export default rootReducer