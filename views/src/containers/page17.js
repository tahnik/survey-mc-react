import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page17Submit } from '../actions/page_actions';

class Page17 extends Component {
    onSubmit(e) {
        this.props.page17Submit(e);
    }
    render() {

        var A = [
            {name: 'Strongly Agree', value: 'STA'},
            {name: 'Agree', value: 'AG'},
            {name: 'Neither Agree nor Disagree', value: 'NAND'},
            {name: 'Disagree', value: 'DA'},
            {name: 'Strongly Disagree', value: 'SDA'}
        ]

        var SATISFACTION = [
            { Q: 'I can focus when I’m in the office' , fieldValue: this.props.fields.one , selectionType: 'S' },
            { Q: 'I can collaborate with colleagues when I’m in the office', fieldValue: this.props.fields.two, selectionType: 'FT' },
            { Q: 'I can be creative in the office', fieldValue: this.props.fields.three, selectionType: 'FT' },
            { Q: 'I feel physically comfortable in the office', fieldValue: this.props.fields.four, selectionType: 'E' },
            { Q: 'I feel connected to the office', fieldValue: this.props.fields.five, selectionType: 'E' },
            { Q: 'The office supports me to develop client relationships', fieldValue: this.props.fields.six, selectionType: 'E' },
            { Q: 'The design of the current office space creates an enjoyable environment to work in', fieldValue: this.props.fields.seven, selectionType: 'E' },
            { Q: 'The design of the office enables me to work productively and supports my daily tasks', fieldValue: this.props.fields.eight, selectionType: 'E' },
            { Q: 'The design of the office supports mobility', fieldValue: this.props.fields.nine, selectionType: 'E' },
            { Q: 'I am proud to bring visitors to the office', fieldValue: this.props.fields.ten, selectionType:  'E'},
            { Q: 'I am able to access spaces with good natural light.', fieldValue: this.props.fields.eleven, selectionType: 'E'},
            { Q: 'My current office space supports my physical wellbeing', fieldValue: this.props.fields.twelve, selectionType: 'A' },

        ]
        console.log(this.props.fields.satisfiedLondon);
        const {fields: {one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <h3>Satisfaction</h3>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {SATISFACTION.map((e) => {
                        return(
                            <div>
                                { e.Q }
                                { A.map((v) => {
                                    return (
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input {...e.fieldValue} className="form-check-input" type="radio" value={v.value} />
                                            { v.name }
                                          </label>
                                        </div>
                                    )
                                }) }
                            </div>
                        )
                    })}
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
	form: 'Page17',
	fields: ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'],
	validate
}, null, { page17Submit })(Page17);
