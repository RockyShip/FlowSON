import React from 'react'

function List(props){
//TODO lists of lists 
	let html = [];
	for (var key in props.data) {
	  	if (props.data.hasOwnProperty(key)) {
			html.push(<li>{(props.data)[key]}</li>);
 		}
	}
	return(
		<div>
			<ul>
			{html}
			</ul>
		</div>
	)
}

function Graph(props){
	return(
		<div>

		</div>
	)
}

export default function Visualizer(props){
	if (props.list_mode){
		return(<List data={props.data}/>);
	}else{
		return(<Graph data={props.data}/>);
	}
}
