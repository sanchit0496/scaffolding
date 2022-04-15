const initialState = {
    token: null
}
const UserReducer = (state = initialState, action) => {
    if (action.type === "setToken") {
        return { ...state, token: action.payload };
    } else {
        return state;
    }
}

export default UserReducer;