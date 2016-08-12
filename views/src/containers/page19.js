import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import axios from 'axios';
import crypto from 'crypto';
import { page19Submit } from '../actions/page_actions'

class page19 extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            submitted: false
        }
    }
    onSubmit(e) {
        this.setState({ loading:true });
        crypto.randomBytes(5, (err, buf) => {
            if (err) {
            }else {
                var userRandomNumber = buf.toString('hex');
                const userDataurl = `https://survey-6242b.firebaseio.com/userData.json`;
                const usersurl = `https://survey-6242b.firebaseio.com/users.json`;
                var email = e.email;
                var users = {
                    [userRandomNumber]: email
                };
                var userData = {
                    [userRandomNumber]: this.props.pageData
                };
                axios.patch(usersurl, users)
                    .then((response) => {
                        axios.patch(userDataurl, userData)
                            .then((response) => {
                                if(response.status == "200"){
                                    this.props.page19Submit();
                                    browserHistory.push('/finish');
                                }
                            })
                            .catch((response) => {
                                this.setState({ loading: false, submitted: false });
                            })
                    })
                    .catch((response) => {
                        this.setState({ loading: false, submitted: false });
                    })

            }
        })
    }
    renderFinish() {
        if(this.state.loading) {
            return (
                <button type="submit" className="btn btn-primary" disabled>loading...</button>
            )
        }else {
            return (
                <button type="submit" className="btn btn-primary">Finish &amp; Submit</button>
            )
        }
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
                    { this.renderFinish() }
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
