import React,{ useState } from 'react'
import { useHistory } from "react-router-dom";
import M from 'materialize-css'

//reset logic

function Reset() {

    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const reset = () =>{

        if(!email || !password){
            M.toast({
                html:"field should not be empty!"
            })
            return
        }

        fetch("/reset",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,                      // if email entered by user exists in DB then only we allow user to change password
                password                    // even though a logged in user is required to enter email if in case hacker hacks into 
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Data : ",data)
            if(data==="SUCCESS"){
                M.toast({
                    html:"Password changed successfully!",
                    classes:"#388e3c green darken-2"
                })
                history.push('/login')
            }
            else{
                M.toast({
                    html:"Email is invalid",
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
                    onClick={()=>reset()}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reset
