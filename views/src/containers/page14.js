import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Page14Submit } from '../actions/page_actions';
var Rcslider = require('rc-slider');

class Page14 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RCValue: 0
        }
    }
    onSubmit(e) {
        this.props.Page14Submit({ timeSpentWorkingIndividually: this.state.RCValue});
    }
    render() {
        const {fields: {whatAreYou}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h4 style={{ marginBottom: 20 }}>3.Of the time you spend working individually, what proportion of the work is</h4>
                <Rcslider onAfterChange={(e) => this.setState({ RCValue: e })} />
                <div style={{ marginTop: 20 }} className="col-md-12">
                    <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Next</button>
                </div>
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
	form: 'Page14',
	fields: ['whatAreYou'],
	validate
}, null, { Page14Submit })(Page14);
