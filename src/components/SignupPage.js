import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify({ name, password, email, phone, profession }));
        navigate("/login")

    };

    return (
        <form className='d-flex flex-column border-dark shadow mt-5 p-2 w-50 m-auto rounded align-items-center justify-content-center'
            onSubmit={handleSubmit}>
            <h2 className='border-bottom border-2  p-2 '>Signup</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder='name' value={name} onChange={(event) => setName(event.target.value)} />
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" />
                <label htmlFor="floatingInput">Password</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="floatingInput" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="12345" />
                <label htmlFor="floatingInput">Phone</label>
            </div>

            <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect" value={profession} onChange={(event) => setProfession(event.target.value)} placeholder="profession" >
                    <option value="">Please choose an option</option>
                    <option value="doctor">Doctor</option>
                    <option value="engineer">Engineer</option>
                    <option value="teacher">Teacher</option>
                </select>

                <label htmlFor="floatingSelect">Profession</label>
            </div>

            <input type="submit" className='btn btn-primary' value="Submit" />
        </form>
    );
};

export default SignupPage;
