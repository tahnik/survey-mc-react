import React, { Component } from 'react';


class Finish extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="well bs-component">
                            <fieldset>
                                <legend>Survey finished</legend>
                                <div className="col-md-12">
                                    <h1>Thank you for finishing the survey</h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Finish;
