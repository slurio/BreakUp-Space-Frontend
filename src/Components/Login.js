import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../Redux/actions';
import {Redirect} from 'react-router-dom';

    const Login = (props) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const changeHandle = (event) => {
            if (event.target.name === "username") {
                setUsername(event.target.value);
            } else if (event.target.name === "password") {
                setPassword(event.target.value);
            }
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            let foundUser = props.users.find(user => user.username === username && user.password === password)
            //let foundUser = props.users[1];
            if (foundUser) {
                props.setUser(foundUser);
            } else {
             return alert('Incorrect Username or Password');
            }
        }

        return (
            <div>
                {props.user ? <Redirect to='/'/>: null}
                <h1>Log-In</h1>
                <form onSubmit={handleSubmit} >
                    <input type='text' name='username' placeholder='Username' onChange={changeHandle} />
                    <br/>
                    <input type='password' name='password' placeholder='Password' onChange={changeHandle}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

    const msp = state => {
        return {
            users: state.users,
            user: state.user
        }
    }

    const mdp = dispatch => {
        return {
           setUser: (user) => dispatch(loginUser(user))
        }
    }


export default connect (msp, mdp)(Login);