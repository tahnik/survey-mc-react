import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page19Submit } from '../actions/page_actions';
import { browserHistory } from 'react-router';

class page19 extends Component {
    onSubmit(e) {
        this.props.page19Submit(this.props.pageData);
    }
    render() {
        const {fields: {role, specificDetails}, handleSubmit} = this.props;
        return(
             <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Finish Survey</legend>
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <button type="submit" className="btn btn-primary">Finish &amp; Submit</button>
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

function mapStateToProps(state) {
    return {
        pageData: state.pageReducers
    }
}

export default reduxForm({
	form: 'page19',
	fields: ['role', 'specificDetails']
}, mapStateToProps, { page19Submit })(page19);
