import React from 'react'
import JSON from '../components/JSON'
import Visualizer from '../components/Visualizer'

export default function App(){
	let stuff = {"1":"1","2":"2","3":"3"};
	return(
		<div>
			<JSON/>
			<Visualizer list_mode={true} data={stuff}/>
		</div>
	);
}
