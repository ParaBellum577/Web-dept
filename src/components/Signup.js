import React from 'react';
import './Signup.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class Signup extends React.Component {
    
    submithandler = event => {
        event.preventDefault();
    }

    handleSucsess = () => {

    }

    handleSignUp = () => {
        
    }
   

    render() {
        return (
    <div className="signup">
        <div>
                                <h1>Sign Up</h1>
           <form className="Signsup" onSubmit={this.submithandler}>
         <input type="text"/>
         <input type="text"/>
         <button type="sucsess" onClick={this.handleSucsess}>OK</button>
         <button type="SignUp" onClick={this.handleSignUp}>Sign Up</button>
           </form>
        </div>
    </div>  
        );


    }

}
