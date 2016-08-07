import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { page2Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page2 extends Component {
    onSubmit(e) {
        console.log("Submitting");
        this.props.page2Submit(e);
    }
    render() {
        const {fields: {affliation, specificDetails}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h3>What is your affiliation?</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio" value="Practice" checked={affliation.value === 'Practice'} />
                        Practice
                      </label>
                    </div>
                    { affliation.value == "Practice" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio" value="MSO" checked={affliation.value === 'MSO'} />
                        MSO
                      </label>
                    </div>
                    { affliation.value == "MSO" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="PD_Learning_HR" checked={affliation.value === 'PD_Learning_HR'} />
                        PD/Learning/HR
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="FABP" checked={affliation.value === 'FABP'} />
                        Finance/Accouting/Benefits/Payroll
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="COMMS" checked={affliation.value === 'COMMS'} />
                        Comms (internal/external)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="EA" checked={affliation.value === 'EA'} />
                        EA
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="OS" checked={affliation.value === 'OS'} />
                        Office services (IT, facilities, repro)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="FF" checked={affliation.value === 'FF'} />
                        Firm functions (Audit, legal, risk, tax, MIO, MPS, Travel, VG, Firm IT)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input {...affliation} className="form-check-input" type="radio"  value="Other" checked={affliation.value === 'Other'} />
                        Other
                      </label>
                    </div>
                    { affliation.value == "Other" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                    {affliation.touched && affliation.error && <div className="form-control-feedback">{affliation.error}</div>}
                    <button type="submit" className="btn btn-primary">Enter</button>
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
	form: 'Page2',
	fields: ['affliation', 'specificDetails']
}, null, { page2Submit })(Page2);
