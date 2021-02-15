import React from 'react'
import { Link } from 'react-router-dom'

//home page for 3 buttons login register and signup

function Home() {
    return (
            <div className="home-card">
                <h3 className="waves-effect white btn">
                    <Link to="/login" >Login</Link>
                </h3>
                <h3 className="waves-effect white btn">
                    <Link to="/signup">SignUp</Link>
                </h3>
                <h3 className="waves-effect white btn">
                    <Link to="/reset">ResetPassword</Link>
                </h3>
            </div>

    )
}

export default Home
