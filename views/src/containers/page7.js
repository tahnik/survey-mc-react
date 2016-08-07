import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page7Submit } from '../actions/page_actions';

class Page1 extends Component {
    onSubmit(e) {
        this.props.page7Submit(e);
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
                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
	const errors = {};

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page1',
	fields: ['whatAreYou'],
	validate
}, null, { page7Submit })(Page1);
