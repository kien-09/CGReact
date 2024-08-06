import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Login() {
    let [account, setAccount] = useState([{username: "admin", password: "admin"}]);
    let [login, setLogin] = useState({username: '', password: ''});
    let [error, setError] = useState('');
    let navigate = useNavigate();
    let clicklogin = () => {
        let dataAccount = account.find((acc) => acc.username === login.username && acc.password === login.password);
        dataAccount ? navigate('/') : setError('Username & Password Invalid')
        dataAccount ? navigate('/home') : setError('Username & Password Invalid')
    }
    return (
        <>
            <center>
                <div className="loginForm">
                    <h2>Login</h2>
                    <input placeholder={"Username"} onChange={(e) => {
                        setLogin({...login, username: e.target.value})
                    }}/>
                    <br/><br/>
                    <input placeholder={"Password"} type="password" onChange={(e) => {
                        setLogin({...login, password: e.target.value})
                    }}/>
                    <br/>
                    {error && <center>
                        <p style={{color: 'red'}}>{error}</p>
                    </center>}
                    <br/>
                    <button onClick={clicklogin}>Login</button>
                    <button onClick={() => {
                        navigate('/register')
                    }}>Register
                    </button>
                </div>
            </center>

        </>
    )
}