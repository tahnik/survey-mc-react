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
                <h3>Are you?</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="CSS" />
                        CSS
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="CSSS" />
                        CSSS
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="CSSA" />
                        CSSA
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enter</button>
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
