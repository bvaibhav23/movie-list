import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ setLogin }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name === name && user.password === password && name !== "" && password !== "") {
            // Move to the next screen
            setLogin(true)
            navigate('/home')

        } else {
            alert('Invalid Credentials');
            setName("")
            setPassword("")
        }
    };

    return (
        <>
            <form className='d-flex flex-column border-dark shadow p-2 w-25 m-auto rounded align-items-center' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder='name' value={name} onChange={(event) => setName(event.target.value)} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder='password' id="floatingPassword" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <br />
                <input type="submit" className='btn btn-primary' value="Submit" />
                <Link to="/" className="link-opacity-100-hover " >Signup</Link>
            </form>
        </>
    );
};

export default LoginPage;
