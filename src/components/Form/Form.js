import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginCaller from "../../APILayer/Login";
import { setUserToken } from "../../state/action-creaters";
import { Title, FormBody, FormButton } from "./FormStyled";

const Form = () => {

    const dispatch = useDispatch();

    // initializing state for component
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // submit API call and storing token into redux
    const handleSubmit = () => {
        LoginCaller(email, password)
            .then(function (response) {
                dispatch(setUserToken(response.data.token));
            })
            .catch(function (error) {
                alert(error);
            });
    }

    // handles changes event of password
    const handlePwdChange = (e) => {
        setPassword(e.target.value);
    }

    // handles changes event of email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // getting token from redux and determining whether user has logged in
    const userToken = useSelector(state => state.User.token)

    const isUserLoggedIn = () => {
        if(userToken !== null){
            return true;
        }else{
            return false;
        }
    }

    return (
        <React.Fragment>
            <Title>Please login to your account</Title>
            <FormBody>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => handleEmailChange(e)}></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => handlePwdChange(e)}></input>
                <div>
                {isUserLoggedIn() && <div>You have successfully logged In!</div>}
                    <FormButton onClick={handleSubmit}>Submit</FormButton>
                </div>
            </FormBody>
        </React.Fragment>
    )
}

export default Form
