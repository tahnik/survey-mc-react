import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page4Submit } from '../actions/page_actions';

var TENURE = [ '0-12 months', '1-2 years', '2-5 years', '>5 years' ]

class Page4 extends Component {
    onSubmit(e) {
        this.props.page4Submit(e);
    }
    render() {
        const {fields: {tenure}, handleSubmit} = this.props;
        return(
             <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 4: Are you?</legend>
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {TENURE.map((e) => {
                        return (
                            <div className="form-check">
                              <label className="form-check-label">
                                <input {...tenure} className="form-check-input" type="radio" value={e} />
                                { e }
                              </label>
                            </div>
                        )
                    })}
                    {tenure.touched && tenure.error && <div className="form-control-feedback">{tenure.error}</div>}
                    <button type="submit" className="btn btn-primary">Next</button>
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

	if (!formProps.tenure) {
		errors.tenure = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page4',
	fields: ['tenure'],
	validate
}, null, { page4Submit })(Page4);
