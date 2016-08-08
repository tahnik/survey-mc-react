import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page9Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDragged: 0
        }
    }
    onSubmit(e) {
        var oneToOneChildrens = $(document.getElementById('oneToOne')).children();
        var threeToFiveChildrens = $(document.getElementById('threeToFive')).children();
        var moreThan5Childrens = $(document.getElementById('moreThan5')).children();
        var oneToOne = 0;
        var threeToFive = 0;
        var moreThan5 = 0;
        oneToOneChildrens.map((e) => {
            if(oneToOneChildrens[e].id == "0.5h"){
                oneToOne += 0.5;
            }else if(oneToOneChildrens[e].id == "1h") {
                oneToOne++;
            }
        })
        threeToFiveChildrens.map((e) => {
            if(threeToFiveChildrens[e].id == "0.5h"){
                threeToFive += 0.5;
            }else if(threeToFiveChildrens[e].id == "1h") {
                threeToFive++;
            }
        })
        moreThan5Childrens.map((e) => {
            if(moreThan5Childrens[e].id == "0.5h"){
                moreThan5 += 0.5;
            }else if(moreThan5Childrens[e].id == "1h") {
                moreThan5++;
            }
        })
        var props = {
            oneToOne: oneToOne,
            threeToFive: threeToFive,
            moreThan5: moreThan5
        }
        this.props.page9Submit(props);
    }
    drop(ev) {
        var data = ev.dataTransfer.getData("text");
        var clonedNode = document.getElementById(data).cloneNode(true);
        $(clonedNode).removeClass('col-md-4');
        $(clonedNode).addClass('col-md-12');
        if(this.state.totalDragged < 8) {
            ev.target.appendChild(clonedNode);
        }
        var droppedHole = document.getElementById('droppedHours');
        this.setState({
            totalDragged: $(droppedHole).children().length
        })
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    render() {
        const {fields: {whatAreYou}, handleSubmit} = this.props;
        return(
            <div className="col-md-8 offset-xs-2">
                <div className="col-md-12">
                    <div id="0.5h" draggable="true" onDragStart={(e) => this.drag(e)} className="col-md-4" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white' }}>
                        1/2hr
                    </div>
                    <div id="1h" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-4" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        1hr
                    </div>
                </div>
                <div id="oneToOne" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">1-1</h6>
                    </div>
                </div>
                <div id="threeToFive" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">3-5</h6>
                    </div>
                </div>
                <div id="moreThan5" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">More than 5</h6>
                    </div>
                </div>
                <div className="col-md-12">
                    <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }
}

function validate(formProps) {
	const errors = {};

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page9',
	fields: ['whatAreYou'],
	validate
}, null, { page9Submit })(Page9);
