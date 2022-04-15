export const setUserToken = (token) => {
    return (dispatch) => {
        dispatch({
            type: 'setToken',
            payload: token
        })
    }
}
