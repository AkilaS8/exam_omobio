import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function Login() {

    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleUserName = (e) => {
        setUserNameError('');
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
    }

    const history = useHistory();

    //fetch api
    async function login(user) {
        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        const obj = { data: [result] };
        console.log((obj.data[0].status));

        if (obj.data[0].status == "Login Success") {
            history.push('/user');
        } else {
            alert(obj.data[0].status);
            setUserName('');
            setPassword('');
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //username validate
        if (userName === '') {
            setUserNameError('Username Required !');
            //username validate
        } else if (password === '') {
            setPasswordError('Password Required !');
        } else {
            let user = { userName, password };
            console.warn(user);
            //api connect
            login(user);
        }
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>

            <form onSubmit={handleFormSubmit}>
                <div className="form-field">
                    <Form.Label className="form-label">User Name </Form.Label>
                    <input type="text" className="form-control input-field" placeholder="Enter username" value={userName} onChange={handleUserName} />
                    {userNameError && <div className="error-msg">{userNameError}</div>}
                </div>
                <div className="form-field">
                    <Form.Label className="form-label">Password </Form.Label>
                    <input type="password" className="form-control input-field" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
                    {passwordError && <div className="error-msg">{passwordError}</div>}
                </div>

                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
