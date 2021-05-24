import React , {useState} from 'react';
import "./Login.css";
import { Link , useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history  = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    };
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email , password).then((auth)=>{
            //it succesfully created a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
        //firebase 
    };
    
    return (
        <div className = "login">
        <img src = "https://c1.wallpaperflare.com/preview/313/182/537/potter-s-wheel-clay-pottery-wheel.jpg" />
             <Link to='/'>
             {/* https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png */}  
               {/* http://pngimg.com/uploads/vase/vase_PNG174.png  */}
                <img
                    className="login__logo"
                    src='https://qwdrlxxyyztovhjybwfz.supabase.co/storage/v1/object/sign/Images/onlinelogomaker-052121-1455-6559-2000-transparent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvb25saW5lbG9nb21ha2VyLTA1MjEyMS0xNDU1LTY1NTktMjAwMC10cmFuc3BhcmVudC5wbmciLCJpYXQiOjE2MjE1ODkyNjMsImV4cCI6MTkzNjk0OTI2M30.OFH-tezgoUu4mUuyIJw-K0kq50xDhprLp3HxJTqCZt4' 
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value = {email} onChange = {e => setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type="password" value ={password} onChange = {e=>setPassword(e.target.value)} />
                    <button className="login_signInButton" type = "submit" onClick = {signIn}>Signin</button>
                </form>
                <p>
                    By signing-in you agree to the POTSHOP Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className = "login__registerButton" onClick = {register}>Create your google account</button>
            </div>
        </div>
    )
}

export default Login
