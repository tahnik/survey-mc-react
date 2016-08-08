import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page10Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDragged: 0
        }
    }
    onSubmit(e) {
        var planExChildrens = $(document.getElementById('planEx')).children();
        var FeDevChildrens = $(document.getElementById('FeDev')).children();
        var CrProChildrens = $(document.getElementById('CrPro')).children();
        var planEx = 0;
        var FeDev = 0;
        var CrPro = 0;
        planExChildrens.map((e) => {
            if(planExChildrens[e].id == "0.5h"){
                planEx += 0.5;
            }else if(planExChildrens[e].id == "1h") {
                planEx++;
            }
        })
        FeDevChildrens.map((e) => {
            if(FeDevChildrens[e].id == "0.5h"){
                FeDev += 0.5;
            }else if(FeDevChildrens[e].id == "1h") {
                FeDev++;
            }
        })
        CrProChildrens.map((e) => {
            if(CrProChildrens[e].id == "0.5h"){
                CrPro += 0.5;
            }else if(CrProChildrens[e].id == "1h") {
                CrPro++;
            }
        })
        var props = {
            planEx: planEx,
            FeDev: FeDev,
            CrPro: CrPro
        }
        this.props.page10Submit(props);
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
                <div id="planEx" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">Planning/execution discussions</h6>
                    </div>
                </div>
                <div id="FeDev" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">Feedback/development discussions</h6>
                    </div>
                </div>
                <div id="CrPro" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-4" style={{ height: '40vh' }}>
                    <div className="col-md-10 col-md-offset-1" style={{ height: '20px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0 }}>
                        <h6 className="text-xs-center">Creative/problem solving discussions</h6>
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
	form: 'Page10',
	fields: ['whatAreYou'],
	validate
}, null, { page10Submit })(Page10);
