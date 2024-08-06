import {Link, useNavigate} from "react-router-dom";

export function Register(){
    let navigate = useNavigate()
    return(
        <>
            <center>
                <div className="registerForm">
                    <h2>Register</h2>
                    <input type="text" placeholder={'Username'}/>
                    <br/><br/>
                    <input type="password" placeholder={'Password'}/>
                    <br/>
                    <Link to={'/'}>Login now?</Link>
                    <button>Register</button>
                    <button onClick={() => {
                        navigate('/')
                    }}>Login
                    </button>
                </div>
            </center>
        </>
    )
}