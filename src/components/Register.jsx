import React from "react";
import log from '../img/log.svg';
import register from '../img/register.svg';

const Register = () => {
   
    return (<div className="panels-container">
        <div className="panel left-panel">
            <div className="content">
                <h3>New here ?</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                </p>
                <button className="btn transparent" id="sign-up-btn">
                    Sign up
                </button>
            </div>
            <img src={log} className="image" alt="login" />
        </div>
        <div className="panel right-panel">
            <div className="content">
                <h3>One of us ?</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                </p>
                <button className="btn transparent" id="sign-in-btn">
                    Sign in
                </button>
            </div>
            <img src={register} className="image" alt="register" />
        </div>
    </div>

    );

}

export default Register;