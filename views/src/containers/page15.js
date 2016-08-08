import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Page15Submit } from '../actions/page_actions';

class Page15 extends Component {
    onSubmit(e) {
        this.props.Page15Submit(e);
    }
    render() {
        const {fields: {daysPerMonth}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-group">
                        <label>How many days per month are you in the office?</label>
                        <textarea className="form-control" rows="3" { ...daysPerMonth }></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
	const errors = {};


	return errors;
}

export default reduxForm({
	form: 'Page15',
	fields: ['daysPerMonth'],
	validate
}, null, { Page15Submit })(Page15);
