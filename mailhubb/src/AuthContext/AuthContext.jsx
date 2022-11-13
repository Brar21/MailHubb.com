import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { checkLogin, checkLogout } from "../Pages/Action";
import remover from "../Pages/remover";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
    const [sign, setSign] = useState({ email: '', password: '',username:''});
    const [login, setLogin] = useState({ email: '', password: '' });   
    const [signUpdata, setSignUpdata] = useState([]);
    const [logindata, setLogindata] = useState({});
    const [state, dispatch] = useReducer(remover,{isAuth:false});

   function handleSign(e){
       const { name, value } = e.target;
       setSign({...sign,[name]:value})
    }
    function handleLogin(e) {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value })
    }

    function SubmitSign(e) {
        e.preventDefault();
        setSignUpdata([...signUpdata, sign])
        alert("Your Acoount is created Successfully")

    }
    function SubmitLogin(e) {
        e.preventDefault();
        if (sign.email === login.email && sign.password === login.password) {
            setLogindata({ ...logindata, login })
            alert("Login SuccessFull");
           
            dispatch(checkLogin())
            // return <Navigate to='/login'></Navigate>
        }
        else {
            alert('Something went Wrong !')
        }
    }
    function Logout() {
        dispatch(checkLogout())
    }
    console.log(state)

    const values = { handleSign, handleLogin,state, SubmitSign, SubmitLogin,Logout, signUpdata, logindata, sign, login };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}