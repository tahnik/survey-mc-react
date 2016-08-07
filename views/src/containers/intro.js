import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Signin } from '../actions/page_actions';

class Intro extends Component {
    onSubmit(e) {
        this.props.Signin(e);
    }
    render() {
        const {fields: {password}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <form className="form-inline" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input type="password" className="form-control" placeholder="Password" {...password}/>
                        {password.touched && password.error && <div className="form-control-feedback">{password.error}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
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
	fields: ['password'],
	validate
}, null, { Signin })(Intro);
