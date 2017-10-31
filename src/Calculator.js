import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			exp:0
		}
	}
	calculate(evt){
		try{
			this.setState({
				exp:eval(this.state.exp)
			});
		}
		catch(e)
		{
			console.log(e);
			this.setState({
				exp:0
			});
		}
	}
	append(evt){
		if(this.state.exp!=0)
		{
			this.setState({
				exp:this.state.exp+evt.target.value
			},function() {
				var element = document.getElementsByClassName('input')[0];
				element.scrollLeft = element.scrollWidth;
			});
			
		}
		else
		{	
			this.setExp(evt)
		}
	}
	setExp(evt) {
		this.setState({
			exp:0
		});
		if(evt.target.value)
			this.setState({
				exp:evt.target.value
			});
	}
	del(){
		var str = this.state.exp.toString();
		this.setState({
			exp:str.substr(0,str.length-1)
		})
	}
	clearAll(){
		this.setExp({"target":0})
	}
	render() {
		return (
			<div className="Calculator">
				<div style={{overflowX: 'auto',textAlign:'right'}} className="input">
					<h1 >{this.state.exp}</h1>
				</div>
				<div className="grid">
					<div className="row">
						<button className="toprow" onClick={this.del.bind(this)}>DEL</button>
						<button className="toprow" onClick={this.clearAll.bind(this)}>CE</button>
					</div>
					<div className="row">
						<button onClick={this.append.bind(this)} value="7" >7</button>
						<button onClick={this.append.bind(this)} value="8" >8</button>
						<button onClick={this.append.bind(this)} value="9" >9</button>
						<button onClick={this.append.bind(this)} value="/" >/</button>
					</div>
					<div className="row">
						<button onClick={this.append.bind(this)} value="4" >4</button>
						<button onClick={this.append.bind(this)} value="5" >5</button>
						<button onClick={this.append.bind(this)} value="6" >6</button>
						<button onClick={this.append.bind(this)} value="*" >*</button>
					</div>
					<div className="row">
						<button onClick={this.append.bind(this)} value="1" >1</button>
						<button onClick={this.append.bind(this)} value="2" >2</button>
						<button onClick={this.append.bind(this)} value="3" >3</button>
						<button onClick={this.append.bind(this)} value="-" >-</button>
					</div>
					<div className="row">		
						<button onClick={this.append.bind(this)} value=".">.</button>
						<button onClick={this.append.bind(this)} value="0" >0</button>
						<button onClick={this.calculate.bind(this)}>=</button>
						<button onClick={this.append.bind(this)} value="+" >+</button>
					</div>
				</div>

			</div>
		);
	}
}

export default Calculator;
