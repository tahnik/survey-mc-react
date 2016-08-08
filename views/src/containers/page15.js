import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page15Submit } from '../actions/page_actions';

class page15 extends Component {
    onSubmit(e) {
        this.props.page15Submit(e);
    }
    render() {
        const {fields: {daysPerMonth}, handleSubmit} = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 15</legend>
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-group">
                        <label>How many days per month are you in the office?</label>
                        <textarea className="form-control" rows="3" { ...daysPerMonth }></textarea>
                    </div>
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


	return errors;
}

export default reduxForm({
	form: 'page15',
	fields: ['daysPerMonth'],
	validate
}, null, { page15Submit })(page15);
