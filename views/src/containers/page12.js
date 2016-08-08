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
        var most = $(document.getElementById('most')).children()[0].id;
        var more = $(document.getElementById('more')).children()[0].id;
        var last = $(document.getElementById('last')).children()[0].id;
        var least = $(document.getElementById('least')).children()[0].id;
        var props = {
            most: most,
            more: more,
            last: last,
            least: least
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
                    <div id="team" draggable="true" onDragStart={(e) => this.drag(e)} className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white' }}>
                        My team
                    </div>
                    <div id="cohort" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        My cohort
                    </div>
                    <div id="practice" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        My practice
                    </div>
                    <div id="others" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'red', height: '3em', marginBottom: '1em', color: 'white'  }}>
                        Others
                    </div>
                </div>
                <div id="most" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="more" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="last" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="least" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' }}>

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
