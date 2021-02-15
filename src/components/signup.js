import React,{ useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import M from 'materialize-css'

//implementing Registeration logic

function Signup() {

    const history = useHistory()
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const signup = () =>{

        if(!username || !email || !password){
            M.toast({
                html:"fields should not be empty"
            })
            return
        }

        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false){
            M.toast({
                html:"invalid email",
                classes:"#d50000 red accent-4"
            })
            return
        }

        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Data : " + data)
            if(data==="SUCCESS"){
                //if user is not found in db then as per data returned by spring boot api 
                //we redirect user to login page
                M.toast({
                    html:"Saved Successfully",
                    classes:"#388e3c green darken-2"
                })
                history.push('/login')
            }
            else{
                M.toast({
                    html:"Username/Email is already taken",
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
            <div className="logincard">
                <div className="authcard input-field">
                    <h2>SignUp</h2>
                    <input 
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    />
                    <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="btn waves-effect waves-light #7e57c2 deep-purple lighten-1"
                    onClick={()=>signup()}>
                        SignUp
                    </button>
                    <h5>
                        <Link to="/login">Already have an account?</Link>
                    </h5>
                </div>
            </div>
        </div>
    )

}

export default Signup
