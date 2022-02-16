import { AlarmTwoTone } from '@mui/icons-material';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    );
}

export default Login;
