import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page7Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDragged: 0
        }
    }
    componentDidMount() {
        var node1 = ReactDOM.findDOMNode(this.refs.sortable1);
        var node2 = ReactDOM.findDOMNode(this.refs.sortable2);
    }
    onSubmit(e) {
        var droppedHole = document.getElementById('droppedHours');
        var childrens = $(droppedHole).children();
        var IW = 0;
        var FM = 0;
        var SO = 0;
        var CL = 0;
        childrens.map((e) => {
            if(childrens[e].id == "1hIW"){
                IW++;
            }else if(childrens[e].id == "1hFM") {
                FM++;
            }else if(childrens[e].id == "1hSO") {
                SO++;
            }else if(childrens[e].id == "1hCL") {
                CL++;
            }
        })
        var props = {
            IW: IW,
            FM: FM,
            SO: SO,
            CL: CL
        }
        this.props.page7Submit(props);
    }
    drop(ev) {
        var data = ev.dataTransfer.getData("text");
        var clonedNode = document.getElementById(data).cloneNode(true);
        $(clonedNode).addClass('cardBottom');
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
                <div className="col-md-4">
                    <div id="1hIW" draggable="true" onDragStart={(e) => this.drag(e)} className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white' }}>
                        1hr Individual Work
                    </div>
                    <div id="1hFM" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        1hr Formal Meetings
                    </div>
                    <div id="1hSO" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        1hr Social
                    </div>
                    <div id="1hCL" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        1hr Clients
                    </div>
                </div>
                <div id="droppedHours" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ borderLeft: "10px solid grey", borderBottom: "10px solid grey", height: '65vh', float: 'right' }}>

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
}, null, { page7Submit })(Page7);
