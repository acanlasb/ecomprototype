import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
// Defining the Login component
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Authenticate the user with Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // Redirect to the home page after successful login
                history.push('/');
            })
            .catch(error => {
                console.error('Error signing in', error);
            });
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;
