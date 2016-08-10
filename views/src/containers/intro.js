import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Signin } from '../actions/page_actions';
import axios from 'axios';


class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
    }
    componentDidMount() {
        axios.get('https://survey-6242b.firebaseio.com/users.json')
        .then((response) => {
            var usersJSON = response.data;

            this.setState({ users: usersJSON })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    onSubmit(e) {
        var users = this.state.users;
        for(var id in users){
            if(users[id] == e.email){
                window.alert("You've already taken the survey");
                return;
            }
        }
        this.props.Signin(e);
    }
    render() {
        const {fields: {email, password}, handleSubmit} = this.props;
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Login</legend>
                                <div className="col-md-12">
                                    <form className="form-horizontal" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Email</label>
                                            <div className="col-md-9">
                                                <input type="email" className="form-control" placeholder="name@example.com" {...email}/>
                                            </div>
                                            {email.touched && email.error && <div className="col-md-8 col-md-offset-4 form-control-feedback">{email.error}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Password</label>
                                            <div className="col-md-9">
                                                <input type="password" className="form-control" placeholder="password" {...password}/>
                                            </div>
                                            {password.touched && password.error && <div className="col-md-8 col-md-offset-4 form-control-feedback">{password.error}</div>}
                                        </div>
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary">Next</button>
                                                </div>
                                            </div>
                                    </form>
                                </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

function validate(formProps) {
	const errors = {};
	const PASSWORD_VALIDATOR_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

	if (!formProps.password) {
		errors.password = 'Please enter a password';
	}else if(formProps.password != "connecteds") {
        errors.password = "Wrong password";
    }

    if(!formProps.email) {
        errors.email = "Please enter an email";
    }

	return errors;
}

export default reduxForm({
	form: 'Signin',
	fields: ['email', 'password'],
	validate
}, null, { Signin })(Intro);
