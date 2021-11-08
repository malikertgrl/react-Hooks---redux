export const increase_counter = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "increase_counter",
            payload: amount
        })
    }
}

export const decrease_counter = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "decrease_counter",
            payload: amount
        })
    }
}