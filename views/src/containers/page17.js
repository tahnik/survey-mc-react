import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { page17Submit } from '../actions/page_actions';

class page17 extends Component {
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
            { Q: 'The design of the current office space creates an enjoyable environment to work in', fieldValue: this.props.fields.one, selectionType: 'E' },
            { Q: 'The design of the office enables me to work productively and supports my daily tasks', fieldValue: this.props.fields.two, selectionType: 'E' },
            { Q: 'I can focus when Iâ€™m in the office' , fieldValue: this.props.fields.three , selectionType: 'S' },
            { Q: 'I can collaborate with colleagues when Iâ€™m in the office', fieldValue: this.props.fields.four, selectionType: 'FT' },
            { Q: 'I can be creative in the office', fieldValue: this.props.fields.five, selectionType: 'FT' },
            { Q: 'I feel physically comfortable in the office', fieldValue: this.props.fields.six, selectionType: 'E' },
            { Q: 'The design of the office supports mobility', fieldValue: this.props.fields.seven, selectionType: 'E' },
            { Q: 'My current office space supports my physical wellbeing', fieldValue: this.props.fields.eight, selectionType: 'A' },
            { Q: 'I feel connected to the office', fieldValue: this.props.fields.nine, selectionType: 'E' },
            { Q: 'The office supports me to develop client relationships', fieldValue: this.props.fields.ten, selectionType: 'E' },
            { Q: 'I am proud to bring visitors to the office', fieldValue: this.props.fields.eleven, selectionType:  'E'},
            { Q: 'The office is reflective of the firmâ€™s culture', fieldValue: this.props.fields.twelve, selectionType: 'E'}

        ]
        const {fields: {one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve}, handleSubmit} = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 17</legend>
            <div className="col-md-8 offset-xs-2">
                <h4 style={{ marginBottom: '20px' }} >Please state the extent to which you agree or disagree with the following statements.</h4>
                <form className="form" onSubmit={handleSubmit((e) => this.onSubmit(e))}>
                    {SATISFACTION.map((e) => {
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
	form: 'page17',
	fields: ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'],
	validate
}, null, { page17Submit })(page17);
