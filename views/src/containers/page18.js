import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page18Submit } from '../actions/page_actions';

class Page18 extends Component {
    onSubmit(e) {
        this.props.page18Submit(e);
    }
    render() {
        const {fields: {designImpactCor, designImpactEnv, dedicatedSocialSpace, workspaceInteraction, currentWork3, futureWork3}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <div className="form-group">
                        <label>What impact do you think the design of the current office has on its corporate image?</label>
                        <textarea className="form-control" rows="3" { ...designImpactCor }></textarea>
                    </div>
                    <div className="form-group">
                        <label>What impact do you think the design of the current office has on its environmental sustainability?</label>
                        <textarea className="form-control" rows="3" { ...designImpactEnv }></textarea>
                    </div>
                    <div className="form-group">
                        <label>Would you benefit from a dedicated social space?</label>
                        <textarea className="form-control" rows="3" { ...dedicatedSocialSpace }></textarea>
                    </div>
                    <div className="form-group">
                        <label>What could improve workspace interaction?</label>
                        <textarea className="form-control" rows="3" { ...workspaceInteraction }></textarea>
                    </div>
                    <div className="form-group">
                        <label>Please provide 3 words to describe your current workplace</label>
                        <textarea className="form-control" rows="3" { ...currentWork3 }></textarea>
                    </div>
                    <div className="form-group">
                        <label>Please provide 3 words to describe you ideal future workplace</label>
                        <textarea className="form-control" rows="3" { ...futureWork3 }></textarea>
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
	form: 'Page18',
	fields: ['designImpactCor', 'designImpactEnv', 'dedicatedSocialSpace', 'workspaceInteraction', 'currentWork3', 'futureWork3'],
	validate
}, null, { page18Submit })(Page18);
