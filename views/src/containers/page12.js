import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { page12Submit } from '../actions/page_actions';
import $ from 'jquery';

class Page12 extends Component {
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
        this.props.page12Submit(props);
    }
    drop(ev) {
        if(ev.target.id != "most" && ev.target.id != "more" && ev.target.id != "last" && ev.target.id != "least") {
            return;
        }
        var data = ev.dataTransfer.getData("text");
        var node = document.getElementById(data);
        var clonedNode = document.getElementById(data).cloneNode(true);
        $(clonedNode).removeClass('col-md-offset-1');
        $(clonedNode).removeClass('col-md-10');
        $(clonedNode).addClass('col-md-12');
        $(clonedNode).on('dragend', function (e) {
            this.remove();
        })
        ev.target.appendChild(clonedNode);
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
                            <legend>Question 12: How do you currently use the office?</legend>
            <div className="col-md-8 offset-xs-2">
                <h5>Who do you most meet informally? (In order of most at the top)</h5>
                <div className="col-md-4">
                    <div className="col-md-offset-1 col-md-10" style={{ backgroundColor: 'white', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' }}></div>
                    <div id="team" draggable="true" onDragStart={(e) => this.drag(e)} className="col-md-offset-1 col-md-10" style={{ backgroundColor: '#0062c4', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' }}>
                        My team
                    </div>
                    <div id="cohort" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: '#ff8900', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center'  }}>
                        My cohort
                    </div>
                    <div id="practice" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: '#1d7e00', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center'  }}>
                        My practice
                    </div>
                    <div id="others" draggable="true" onDragStart={(e) => this.drag(e)}  className="col-md-offset-1 col-md-10" style={{ backgroundColor: '#c40000', height: '3em', marginBottom: '1em',  paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center'  }}>
                        Others
                    </div>
                </div>
                <div className="col-md-8" style={{ height: '3em', float: 'right', marginBottom: '1em' }}>
                    <h4 style={{ textAlign: 'center', marginTop: 10}}>Most</h4>
                </div>
                <div id="most" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="more" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="last" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey",  height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div id="least" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} className="col-md-8" style={{ border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' }}>

                </div>
                <div className="col-md-8" style={{ height: '3em', float: 'right', marginBottom: '1em' }}>
                    <h4 style={{ textAlign: 'center', marginTop: 10 }}>Least</h4>
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
	form: 'Page1',
	fields: ['whatAreYou'],
	validate
}, null, { page12Submit })(Page12);
