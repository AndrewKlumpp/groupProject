import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


const LoginContent = (props) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [errors, setErrors] = useState({});
    const { setUser } = props;

    const handleSwitchForm = () => {
        setIsLogin(!isLogin);
        setErrors({}); // Clear errors when switching forms
    };

    const submitHandlerLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', { userName, password }, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setUser(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                console.log(errors);
                //setErrors({ general: "Login failed. Please try again." });
            });
    }

    const submitHandlerRegister = (e) => {
        e.preventDefault();

        const newUser = {
            userName,
            password,
            confirmPassword,
            email
        }
        axios.post('http://localhost:8000/api/register', newUser, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate("/login");
                window.location.reload(); // reloads the page so user can now login
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
            });
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
                <Header title={'Login/Reg'} />
            </div>
            <div className="card">
                {errors.general && <p className="text-danger text-center">{errors.general}</p>}
                {isLogin ? (
                    <form onSubmit={submitHandlerLogin}>
                        <h5 className="card-title text-center">Login</h5>
                        <div className="mb-3">
                            <label className="form-label">User Name:</label>
                            <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-warning w-100">Login</button>
                        <p className="text-center mt-3">
                            Don't have an account? <span onClick={handleSwitchForm} style={{ cursor: 'pointer', color: 'blue' }}>Register here</span>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={submitHandlerRegister}>
                        <h5 className="card-title text-center">Register User</h5>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} />
                            {errors.userName && <p className="text-danger">{errors.userName.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password:</label>
                            <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <button className="btn btn-warning w-100">Register User</button>
                        <p className="text-center mt-3">
                            Already have an account? <span onClick={handleSwitchForm} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginContent;
