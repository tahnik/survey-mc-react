import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page16Submit } from '../actions/page_actions';


class page16 extends Component {
    onSubmit(e) {
        this.props.page16Submit(e);
    }
    render() {
        const {fields: {
            one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen
        }, handleSubmit} = this.props;
        var questions = [
            { id: this.props.fields.one, one: 'An allocated desk in an open plan setting', two: 'An unassigned desk, with access to quiet space for focused work'},
            { id: this.props.fields.two,  one: 'A shared desk in a shared office', two: 'An unassigned desk, with access to quiet space for focused work'},
            { id: this.props.fields.three,  one: 'An shared desk in an open plan setting', two: 'An unassigned desk, with access to quiet space for focused work'},
            { id: this.props.fields.four,  one: 'An allocated desk with access to multifunctional meeting space (e.g., village green)', two: 'An unassigned desk, with access to single purpose meeting space (closed rooms, white boards, access to VC)'},
            { id: this.props.fields.five,  one: 'An allocated desk in an open plan setting', two: 'An unassigned desk with access to private space for phone calls and VC'},
            { id: this.props.fields.six,  one: 'An allocated desk in an open plan setting but no defined social space', two: 'An unassigned desk with access to social space'},
            { id: this.props.fields.seven,  one: 'An allocated desk, among people you do not usually work with or interact with', two: 'An unassigned desk close to your team or peers'},
            { id: this.props.fields.eight,  one: 'Space in a shared closed office, with access to multifunctional meeting space (e.g., village green)', two: 'Space in an open plan setting with access to single purpose meeting space (closed rooms, white boards, access to VC)'},
            { id: this.props.fields.nine,  one: 'Space in a shared closed office, without access to alternative closed spaces for phone calls/ private conversations', two: 'Space in an open plan environment with access to private space for phone calls and VC'},
            { id: this.props.fields.ten,  one: 'Space in a shared closed office but no defined social space', two: 'Space in an open plan environment with access to social space'},
            { id: this.props.fields.eleven,  one: 'Space in a shared closed office among people you do not usually work with or interact with', two: 'Space in an open plan environment close to your team or peers'},
            { id: this.props.fields.twelve,  one: 'Access to single purpose meeting space but no alternative closed spaces for phone calls/ private conversations', two: 'Access to multifunctional meetings space (e.g., village green) and closed space for making phone calls/ private conversations'},
            { id: this.props.fields.thirteen,  one: 'Access to single purpose meeting space but no defined social space', two: 'Access to multifunctional meetings space (e.g., village green) which can be used as both a meeting and social space'},
            { id: this.props.fields.fourteen,  one: 'Access to single purpose meeting space but no facility to sit close to your peers or team', two: 'Access to multifunctional meetings space (e.g., village green) and the ability to sit close to your peers or team'},
            { id: this.props.fields.fifteen,  one: 'Access to closed space for phone calls/private conversations and VC but no defined social space', two: 'Access to defined social space but no closed space for phone calls/private conversations or VC'},
            { id: this.props.fields.sixteen,  one: 'Access to defined social space but no facility to sit close to your peers or team', two: 'The ability to sit close to your team but no access to defined social space'}
        ]
        return(
             <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 16</legend>
            <div className="col-md-8 offset-xs-2">
                <h4 style={{ marginBottom: '20px' }} >In designing the new office, we need to make a number of trade-offs. This section helps us understand what is most important to you.</h4>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {questions.map((e) => {
                        if(e.id){
                            return(
                                <div>
                                    <h4>Would you prefer</h4>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input {...e.id} className="form-check-input" type="radio" value={e.id.name} />
                                        { e.one }
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input {...e.id} className="form-check-input" type="radio" value={e.id.name} />
                                        { e.two }
                                      </label>
                                    </div>
                                </div>
                            )
                        }
                    })}
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
	form: 'page16',
	fields: [ 'one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen' ],
	validate
}, null, { page16Submit })(page16);
