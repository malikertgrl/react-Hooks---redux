export const AccountReducer = (state = 2, action) => {
    switch (action.type) {
        case "increase_counter":
            return state + action.payload;
        case "decrease_counter":
            return state - action.payload

        default:
            return state;
    }
}