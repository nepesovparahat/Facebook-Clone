import React, { useState} from 'react';
import Logo from './logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const signInSchema = yup.object().shape({
    email: yup
        .string()
        .required(),
    password: yup
        .string()
        .required()
})
const SignIn = () => {
    const { register, handleSubmit} = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(signInSchema),
    })
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    
    const onSubmit = (data) => {
       return Login_(data);
        
    }
    
    function Login_(data) {
        if (data.email === admin.email) {
            if (data.password === admin.password) {
                history.push("./admin");  
            }
            else {
            setErrorPassword('Password you entered is incorrect. Did you forget your password ?');   
            }  
        }
      
       else{ 
        setErrorEmail('Email you entered does not match any account.')   
        }
    }
    const history = useHistory();
    const admin = {
        email: "admin@gmail.com",
        password: "admin1234"
    }
    return (  
        <div className="div_">
        <img src={Logo} className="logo" alt="Facebook logo"/>
            <div className="sign">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="signIn"
                        style={{ border: (errorEmail !== "") ? '1px solid red' : "" }}
                        placeholder="Mobile number or email address"
                        type="email"
                        name="email"
                        ref={register}
                        required
                    /><div>
                        <span>{(errorEmail !== "") ? (<span className="err">{errorEmail}</span>) :"" }</span>
                    </div>
                    <input className="signIn"
                        style={{ border: (errorPassword !== "") ? '1px solid red' : "" }}
                        placeholder="Password"
                        type="password"
                        name="password"
                        ref={register}
                        required
                    />
                    {(errorPassword !== "") ? (<span className="err">{errorPassword}</span>) : ""}
                    <div>
                        <div className="div_btn">
                            <button className="btn" type="submit">Log In</button>
                        </div> </div>
                    <span className="psw"><a href="#">Forgot password ?</a></span>
                    <hr className="line"></hr>
                    <Link to="/SignUp"><button className="sign_up_btn" >Sign Up</button></Link>
                </form>
            </div>
        </div>
         
     );
};
export default SignIn;
