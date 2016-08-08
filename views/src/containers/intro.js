import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Signin } from '../actions/page_actions';

class Intro extends Component {
    onSubmit(e) {
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
	}else if(PASSWORD_VALIDATOR_REGEX.exec(formProps.password) === null) {
		errors.password = "Password must have an Uppercase and Lowercase Letter and a number. It must be at least 6 characters long"
	}

	return errors;
}

export default reduxForm({
	form: 'Signin',
	fields: ['email', 'password'],
	validate
}, null, { Signin })(Intro);
