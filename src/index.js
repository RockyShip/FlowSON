//var react = require('react');
//var ReactDOM = require('react-dom');

import React from 'react'
import ReactDOM from 'react-dom'

//"use strict";

class HelloMessage extends React.Component{
	render(){
		return <div>Hello {this.props.name}</div>;
	}
}

//window.onload = function(){
	ReactDOM.render(<HelloMessage name="John" />, document.getElementById("container"));
//}
