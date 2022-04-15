import axios from "axios";

const LoginCaller = (username, password) => {

    return axios.post('https://reqres.in/api/login', {
        email: username,
        password: password
    })

}
export default LoginCaller;