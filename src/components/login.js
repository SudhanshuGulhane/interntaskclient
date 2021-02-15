import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import M from 'materialize-css'
import Profile from './profile';

//implementing Login logic

function Login() {

    //defining hooks for storing input values given by user
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    //if user is loggedIn then we redirect him to Profile page for reseting password
    const [loggedIn,setLoggedIn] = useState(false)

    const login = () =>{

        console.log(username + " " + password)

        if(!username || !password){
            M.toast({
                html:"fields can't be empty!"
            })
            return
        }

        //making an api call to localhost:8080/login 
        //config related to cors policy is added in package.json file line no:5       

        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            //receiving data fetched from spring boot api 
            console.log("Data : " + data)
            if(data==="SUCCESS"){
                setLoggedIn(true)
                M.toast({
                    html:"logged in successfully",
                    classes:"#388e3c green darken-2"
                })
            }
            else{
                M.toast({
                    html:"invalid username or password",
                    classes:"#c62828 red darken-3"
                })
                return
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        
        <div>
           { 
                loggedIn ? <Profile user={username} />:

                <div className="logincard">
                    <div className="authcard input-field">
                        <h2>Login</h2>
                        <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                        <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <button className="btn waves-effect waves-light #7e57c2 deep-purple lighten-1"
                        onClick={()=>{login()}}>
                            Login
                        </button>
                        <h5>
                        <Link to="/signup">Don't have an account?</Link>
                        </h5>
                    </div>
                </div>

           }

        </div>
    )
}


export default Login
