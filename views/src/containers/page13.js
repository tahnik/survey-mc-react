import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page13Submit } from '../actions/page_actions';
var Rcslider = require('rc-slider');

class page13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RCValue: 0
        }
    }
    onSubmit(e) {
        this.props.page13Submit({ proportionOfMeetings: this.state.RCValue});
    }
    render() {
        const {fields: {whatAreYou}, handleSubmit} = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 13: How do you currently use the office?</legend>
            <div className="col-md-8 offset-xs-2">
                <h4 style={{ marginBottom: 20 }}>What proportion of your client meetings are:</h4>
                <h5 style={{color: 'skyblue', marginBottom: 20}}>Formal meetings or workshops<span style={{color: '#b2b2b2'}} > | Informal working sessions</span></h5>
                <Rcslider onChange={(e) => this.setState({ RCValue: e })} />
                <h4 style={{ marginTop: '1em' }}>{ `${this.state.RCValue}%` }</h4>
                <div style={{ marginTop: 20 }} className="col-md-12">
                    <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Next</button>
                </div>
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

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'page13',
	fields: ['whatAreYou'],
	validate
}, null, { page13Submit })(page13);
