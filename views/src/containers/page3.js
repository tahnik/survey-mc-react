import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page3Submit } from '../actions/page_actions';
import { browserHistory } from 'react-router';

var CSS = ['Senior Partner', 'Partner', 'AP', 'EM', 'Associate/JA', 'BA'];
var Non_CSS = ['Manager/Team leader', 'Team member', 'Other'];

class Page3 extends Component {
    onSubmit(e) {
        this.props.page3Submit(e);
    }
    render() {
        var roleMap = [];
        if(!browserHistory){
            return <div>Loading...</div>
        }else if(!this.props.pageData.page1) {
            browserHistory.push("/page1");
        }else if(this.props.pageData.page1.whatAreYou == "CSS") {
            roleMap = CSS;
        }else {
            roleMap = Non_CSS
        }
        const {fields: {role, specificDetails}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h3>What is your role?</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {roleMap.map((e) => {
                        return (
                            <div className="form-check">
                              <label className="form-check-label">
                                <input {...role} className="form-check-input" type="radio" value={e} />
                                { e }
                              </label>
                            </div>
                        )
                    })}
                    { role.value == "Other" ? <div className="form-group"><label>Please specify</label><textarea className="form-control" rows="3" { ...specificDetails }></textarea></div> : <div></div> }
                    {role.touched && role.error && <div className="form-control-feedback">{role.error}</div>}
                    {specificDetails.touched && specificDetails.error && <div className="form-control-feedback">{specificDetails.error}</div>}
                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
	const errors = {};

	if (!formProps.role) {
		errors.role = 'Please select a choice';
	}

    if(!formProps.specificDetails){
        if(formProps.role == "Other"){
            errors.specificDetails = "Please specify in Other";
        }
    }

	return errors;
}

function mapStateToProps(state) {
    return {
        pageData: state.pageReducers
    }
}

export default reduxForm({
	form: 'Page3',
	fields: ['role', 'specificDetails'],
	validate
}, mapStateToProps, { page3Submit })(Page3);
