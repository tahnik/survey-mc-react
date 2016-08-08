import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Page13Submit } from '../actions/page_actions';
var Rcslider = require('rc-slider');

class Page13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RCValue: 0
        }
    }
    onSubmit(e) {
        this.props.Page13Submit({ proportionOfMeetings: this.state.RCValue});
    }
    render() {
        const {fields: {whatAreYou}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h4 style={{ marginBottom: 20 }}>What proportion of your informal or social meetings:</h4>
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
	form: 'Page13',
	fields: ['whatAreYou'],
	validate
}, null, { Page13Submit })(Page13);
