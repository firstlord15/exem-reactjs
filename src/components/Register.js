import React from 'react';
import '../components/css/Modern.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container jumbotron div-modern2 shadow-sm mt-5">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Link type="submit" class="btn btn-danger" to="/">Submit</Link>
            </form>
        </div>
    );
};

export default Register;