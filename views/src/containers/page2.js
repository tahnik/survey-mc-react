import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { page2Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page2 extends Component {
    onSubmit(e) {
        this.props.page2Submit(e);
    }
    render() {
        const {fields: {affliation, specificDetails}, handleSubmit} = this.props;
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 2: What is your affiliation?</legend>
                                <div className="col-md-8 offset-xs-2">
                                    <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input {...affliation} className="form-check-input" type="radio" value="GEN_CSS" />
                                                Generalist CSS
                                            </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio" value="Practice" />
                                            Practice
                                          </label>
                                        </div>
                                        { affliation.value == "Practice" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio" value="MSO" />
                                            MSO
                                          </label>
                                        </div>
                                        { affliation.value == "MSO" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="PD_Learning_HR" />
                                            PD/Learning/HR
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="FABP" />
                                            Finance/Accouting/Benefits/Payroll
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="COMMS" />
                                            Comms (internal/external)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="EA" />
                                            EA
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="OS" />
                                            Office services (IT, facilities, repro)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="FF" />
                                            Firm functions (Audit, legal, risk, tax, MIO, MPS, Travel, VG, Firm IT)
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...affliation} className="form-check-input" type="radio"  value="Other" />
                                            Other
                                          </label>
                                        </div>
                                        { affliation.value == "Other" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                                        {affliation.touched && affliation.error && <div className="form-control-feedback">{affliation.error}</div>}
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

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page2',
	fields: ['affliation', 'specificDetails']
}, null, { page2Submit })(Page2);
