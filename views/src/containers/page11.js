import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page11Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDragged: 0
        }
    }
    onSubmit(e) {
        var NoCoChildrens = $(document.getElementById('NoCo')).children();
        var SOCOChildrens = $(document.getElementById('SOCO')).children();
        var HICOChildrens = $(document.getElementById('HICO')).children();
        var NoCo = 0;
        var SOCO = 0;
        var HICO = 0;
        NoCoChildrens.map((e) => {
            if(NoCoChildrens[e].id == "0.5h"){
                NoCo += 0.5;
            }else if(NoCoChildrens[e].id == "1h") {
                NoCo++;
            }
        })
        SOCOChildrens.map((e) => {
            if(SOCOChildrens[e].id == "0.5h"){
                SOCO += 0.5;
            }else if(SOCOChildrens[e].id == "1h") {
                SOCO++;
            }
        })
        HICOChildrens.map((e) => {
            if(HICOChildrens[e].id == "0.5h"){
                HICO += 0.5;
            }else if(HICOChildrens[e].id == "1h") {
                HICO++;
            }
        })
        var props = {
            NoCo: NoCo,
            SOCO: SOCO,
            HICO: HICO
        }
        this.props.page11Submit(props);
    }
    drop(ev) {
        if(ev.target.id != "NoCo" && ev.target.id != "SOCO" && ev.target.id != "HICO") {
            return;
        }
        var data = ev.dataTransfer.getData("text");
        var clonedNode = document.getElementById(data).cloneNode(true);
        $(clonedNode).removeClass('col-md-4');
        $(clonedNode).addClass('col-md-12');
        $(clonedNode).on('dragend', function (e) {
            this.remove();
        })
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
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well bs-component">
                        <fieldset>
                            <legend>Question 11: How do you currently use the office?</legend>
            <div className="col-md-8 offset-xs-2">
                <h5>What proportion of your meetings are:</h5>

                <div id="NoCo" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ minHeight: '40vh', paddingBottom: '6em' }}>
                    <div className="col-md-12" style={{ height: '2em', textAlign: 'center', paddingTop: '7px' , backgroundColor: 'skyblue',  borderRadius: '5px', marginBottom: '1em'  }}>
                        <h6 className="text-xs-center">Not confidential</h6>
                    </div>
                </div>
                <div id="SOCO" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ minHeight: '40vh', paddingBottom: '6em' }}>
                    <div className="col-md-12" style={{ height: '2em', textAlign: 'center', paddingTop: '7px' , backgroundColor: 'skyblue',  borderRadius: '5px', marginBottom: '1em'  }}>
                        <h6 className="text-xs-center">Somewhat confidential</h6>
                    </div>
                </div>
                <div id="HICO" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ minHeight: '40vh', paddingBottom: '6em' }}>
                    <div className="col-md-12" style={{ height: '2em', textAlign: 'center', paddingTop: '7px' , backgroundColor: 'skyblue',  borderRadius: '5px', marginBottom: '1em'  }}>
                        <h6 className="text-xs-center">Highly confidential</h6>
                    </div>
                </div>
                <div className="col-md-12">
                    <div id="0.5h" draggable="true" onDragStart={(e) => this.drag(e)} className="col-md-4" style={{ backgroundColor: '#0062c4', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center', marginRight: '2em' }}>
                        1/2hr
                    </div>
                    <div id="1h" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-4" style={{ backgroundColor: '#ff9300', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center'  }}>
                        1hr
                    </div>
                </div>
                <div className="col-md-12">
                    <button onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Next</button>
                </div>
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

	if (!formProps.whatAreYou) {
		errors.whatAreYou = 'Please select a choice';
	}

	return errors;
}

export default reduxForm({
	form: 'Page11',
	fields: ['whatAreYou'],
	validate
}, null, { page11Submit })(Page11);
