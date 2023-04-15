
import React, {useState} from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const check = ()=> {

        const body = document.getElementById("ans");
        if(userName != null && password != null && email != null) {
            if(password == ConfirmPassword) {
                const success = document.createElement("div");
                success.innerText = "Successfuly signed up";
                success.classList.add('correct');
            body.append(success);
            }
            else {
                const failure = document.createElement("div");
                failure.innerText = "error";
                failure.classList.add('error');
            body.append(failure);
            }
        }
        else {
            const failure = document.createElement("div");
            failure.innerText = "error: All fields are mandatory";
            failure.classList.add('error');
         body.append(failure);
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="user name" id="userName" name="userName" />
            <br />
            {/* <label for="email">email</label> */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="Email" id="email" name="email" />
            <br />
            {/* <label for="password">password</label> */}
            <input password={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <br />
            {/* <label for="password">password</label> */}
            <input password={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" id="ConPassword" name="ConPassword" />
            <br />
            <div id="ans"></div>
            <p id="error">* All Fields are Mandatory</p>
            <button typeof="submit" id="btn" onClick={check}>Sign up</button>
        </form>
    )
}