import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './Login.css';
const dispatchLoginRequest =(dispatch, formData)=>{
    dispatch({type: 'USER_LOGIN_REQUESTED', payload: formData})
}

 const Login = (props) =>{
    const dispatch = props.dispatch;
    const navigate = useNavigate()

    const stateChange = () => {
        var state = props.store.getState(); 
        if(state.auth.token){
            console.log(state.auth.token);
            navigate('/dashboard');
        }
    }
    props.store.subscribe(stateChange);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatchLoginRequest(dispatch,formData)
    };
    
    const formData = {
        email:'',
        password:''
    }
    
    const onChange = (e) =>{
        formData[e.target.name]= e.target.value.trim()
    }


    return (
        <main className="text-center main">
            <div className="form-signin">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={onChange}/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={onChange}/>
                    <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>
        </main>

     );

 }

 export default connect(null)(Login);