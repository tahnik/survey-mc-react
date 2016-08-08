import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page8Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDragged: 0
        }
    }
    onSubmit(e) {
        var remoteMeetingsChildrens = $(document.getElementById('remoteMeetings')).children();
        var inPersonChildrens = $(document.getElementById('inPerson')).children();
        var formalEventsChildrens = $(document.getElementById('formalEvents')).children();
        var remoteMeetings = 0;
        var inPerson = 0;
        var formalEvents = 0;
        remoteMeetingsChildrens.map((e) => {
            if(remoteMeetingsChildrens[e].id == "0.5h"){
                remoteMeetings += 0.5;
            }else if(remoteMeetingsChildrens[e].id == "1h") {
                remoteMeetings++;
            }
        })
        inPersonChildrens.map((e) => {
            if(inPersonChildrens[e].id == "0.5h"){
                inPerson += 0.5;
            }else if(inPersonChildrens[e].id == "1h") {
                inPerson++;
            }
        })
        formalEventsChildrens.map((e) => {
            if(formalEventsChildrens[e].id == "0.5h"){
                formalEvents += 0.5;
            }else if(formalEventsChildrens[e].id == "1h") {
                formalEvents++;
            }
        })
        var props = {
            remoteMeetings: remoteMeetings,
            inPerson: inPerson,
            formalEvents: formalEvents
        }
        this.props.page8Submit(props);
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
                <div id="remoteMeetings" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">Remote Meeting</h6>
                    </div>
                </div>
                <div id="inPerson" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">In person</h6>
                    </div>
                </div>
                <div id="formalEvents" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">Formal events</h6>
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
	form: 'Page1',
	fields: ['whatAreYou'],
	validate
}, null, { page8Submit })(Page8);
