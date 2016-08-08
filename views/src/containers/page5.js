import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page5Submit } from '../actions/page_actions';

var USUAL_WORKSPACE = [
    'Assigned desk in office',
    'Assigned desk, open plan',
    'Hot desk',
    'Meeting room/ team room',
    'Informal meet area',
    'Monk cells'
]

class Page5 extends Component {
    onSubmit(e) {
        this.props.page5Submit(e);
    }
    render() {
        const {fields: {usualWorkspace}, handleSubmit} = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 5: What is your usual workspace in London office?</legend>
            <div className="col-md-8 offset-xs-2">

                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {USUAL_WORKSPACE.map((e) => {
                        return (
                            <div className="form-check">
                              <label className="form-check-label">
                                <input {...usualWorkspace} className="form-check-input" type="radio" value={e} />
                                { e }
                              </label>
                            </div>
                        )
                    })}
                    {usualWorkspace.touched && usualWorkspace.error && <div className="form-control-feedback">{usualWorkspace.error}</div>}
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

	if (!formProps.usualWorkspace) {
		errors.usualWorkspace = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page5',
	fields: ['usualWorkspace'],
	validate
}, null, { page5Submit })(Page5);
