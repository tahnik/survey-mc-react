import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Page19Submit } from '../actions/page_actions';
import { browserHistory } from 'react-router';

class Page19 extends Component {
    onSubmit(e) {
        this.props.Page19Submit(this.props.pageData);
    }
    render() {
        const {fields: {role, specificDetails}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h3>Finish Surey</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    <button type="submit" className="btn btn-primary">Finish</button>
                </form>
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
	form: 'Page19',
	fields: ['role', 'specificDetails']
}, mapStateToProps, { Page19Submit })(Page19);
