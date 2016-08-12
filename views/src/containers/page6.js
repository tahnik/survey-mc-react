import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page6Submit } from '../actions/page_actions';



class Page6 extends Component {
    onSubmit(e) {
        this.props.page6Submit(e);
    }
    render() {
        var S = [
            {name: 'Fully Satisfied', value: 'FUSA'},
            {name: 'Satisfied', value: 'SA'},
            {name: 'Neither satisfied nor dissatisfied', value: 'NSND'},
            {name: 'Dissatisfied', value: 'DI'},
            {name: 'Fully Dissatisfied', value: 'FD'}
        ]

        var E = [
            {name: 'Excellent', value: 'EX'},
            {name: 'Good', value: 'GO'},
            {name: 'Neither good nor bad', value: 'NGNB'},
            {name: 'Poor', value: 'PO'},
            {name: 'Very poor', value: 'VP'}
        ]

        var A = [
            {name: 'Strongly Agree', value: 'STA'},
            {name: 'Agree', value: 'AG'},
            {name: 'Neither Agree nor Disagree', value: 'NAND'},
            {name: 'Disagree', value: 'DA'},
            {name: 'Strongly Disagree', value: 'SDA'}
        ]

        var SATISFACTION = [
            { Q: 'How satisfied are you with London office?' , fieldValue: this.props.fields.satisfiedLondon , selectionType: 'S' },
            { Q: 'What gets the best out of you in London office?', fieldValue: this.props.fields.bestOutOfLondonOffice, selectionType: 'FT' },
            { Q: 'What would you change about the office?', fieldValue: this.props.fields.changeAboutOffice, selectionType: 'FT' },
            { Q: 'The variety of workspaces available?', fieldValue: this.props.fields.workspaceVariety, selectionType: 'E', label: 'How would you rate the following in the london office?' },
            { Q: 'The availability of workspace?', fieldValue: this.props.fields.choiceOfWorkspace, selectionType:  'E'},
            { Q: 'The lighting?', fieldValue: this.props.fields.lighting, selectionType: 'E' },
            { Q: 'The air quality?', fieldValue: this.props.fields.airQuality, selectionType: 'E' },
            { Q: 'The noise levels?', fieldValue: this.props.fields.noiseLevel, selectionType: 'E' },
            { Q: 'The furniture/ergonomics/comfort?', fieldValue: this.props.fields.furniture, selectionType: 'E' },
            { Q: 'The informal breakout and social spaces?', fieldValue: this.props.fields.informalBreakout, selectionType: 'E' },
            { Q: 'The showers/changing /cycling facilities?', fieldValue: this.props.fields.showers, selectionType: 'E'},
            { Q: 'The design of the current office  space creates an enjoyable environment to work in', fieldValue: this.props.fields.designOfCurrentOffice, selectionType: 'A' }

        ]
        const {fields: {
            satisfiedLondon,
            bestOutOfLondonOffice,
            changeAboutOffice,
            workspaceVariety,
            lighting,
            airQuality,
            noiseLevel,
            furniture,
            informalBreakout,
            availableWorkspace,
            showers,
            designOfCurrentOffice
        }, handleSubmit} = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 6: Satisfaction</legend>
            <div className="col-md-8 offset-xs-2">
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {SATISFACTION.map((e) => {
                        if(e.selectionType == 'S'){
                            return(
                                <div>
                                    { e.Q }
                                    { S.map((v) => {
                                        return (
                                            <div className="form-check">
                                              <label className="form-check-label">
                                                <input {...e.fieldValue} className="form-check-input" type="radio" value={v.name} />
                                                { v.name }
                                              </label>
                                            </div>
                                        )
                                    }) }
                                </div>
                            )
                        }else if(e.selectionType == 'E') {
                            return(
                                <div>
                                    { e.label ? <h4> { e.label }</h4> : <div></div>}
                                    { e.Q }
                                    { E.map((v) => {
                                        return (
                                            <div className="form-check">
                                              <label className="form-check-label">
                                                <input {...e.fieldValue} className="form-check-input" type="radio" value={v.name} />
                                                { v.name }
                                              </label>
                                            </div>
                                        )
                                    }) }
                                </div>
                            )
                        }else if(e.selectionType == 'A') {
                            return(
                                <div>
                                    { e.Q }
                                    { A.map((v) => {
                                        return (
                                            <div className="form-check">
                                              <label className="form-check-label">
                                                <input {...e.fieldValue} className="form-check-input" type="radio" value={v.name} />
                                                { v.name }
                                              </label>
                                            </div>
                                        )
                                    }) }
                                </div>
                            )
                        }else if(e.selectionType == 'FT') {
                            return(
                                <div>
                                    { e.Q }
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" { ...e.fieldValue }>

                                        </textarea>
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
	form: 'Page6',
	fields: [
        'satisfiedLondon',
        'bestOutOfLondonOffice',
        'changeAboutOffice',
        'workspaceVariety',
        'lighting',
        'airQuality',
        'noiseLevel',
        'furniture',
        'informalBreakout',
        'availableWorkspace',
        'showers',
        'designOfCurrentOffice'
    ],
	validate
}, null, { page6Submit })(Page6);
