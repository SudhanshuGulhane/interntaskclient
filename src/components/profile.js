import React from 'react'
import { Link } from 'react-router-dom'

function Profile(props) {
    return (
        <div>
            <h4 style={{marginLeft:"40px",marginTop:"30px"}}>Hello {props.user}</h4>
            <h4>
            <Link to="/reset" style={{marginLeft:"40px"}}>Reset Password</Link>
            </h4>
        </div>
    )
}

export default Profile
