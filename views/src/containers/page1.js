import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page1Submit } from '../actions/page_actions';

class Page1 extends Component {
    onSubmit(e) {
        this.props.page1Submit(e);
    }
    render() {
        const {fields: {whatAreYou}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h3>Are you?</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...whatAreYou} className="form-check-input" type="radio" value="CSS" checked={whatAreYou.value === 'CSS'} />
                        CSS
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...whatAreYou} className="form-check-input" type="radio" value="CSSS" checked={whatAreYou.value === 'CSSS'} />
                        CSSS
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...whatAreYou} className="form-check-input" type="radio"  value="CSSA" checked={whatAreYou.value === 'CSSA'} />
                        CSSA
                      </label>
                    </div>
                    {whatAreYou.touched && whatAreYou.error && <div className="form-control-feedback">{whatAreYou.error}</div>}
                    <button type="submit" className="btn btn-primary">Enter</button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
	const errors = {};
	const PASSWORD_VALIDATOR_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Signin',
	fields: ['whatAreYou'],
	validate
}, null, { page1Submit })(Page1);
