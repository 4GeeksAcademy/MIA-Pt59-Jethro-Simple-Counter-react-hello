// Import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//import './icons.js'; 

<script src="https://kit.fontawesome.com/072e5df971.js" crossorigin="anonymous"></script>
const SecondsCounter = (props) => {
	return (
		<div className="text-center d-flex justify-content-center">
			<div className="Calendar justify-content-center"><i class="far fa-clock"></i></div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
        </div>
	);

};

 SecondsCounter.PropTypes ={
	digitFour : PropTypes.number, 
	digitThree : PropTypes.number,
	digitTwo : PropTypes.number,
	digitOne : PropTypes.number
};

let counter =0;

setInterval(function(){
	const four= Math.floor(counter/1000);
	const three= Math.floor(counter/100);
	const two= Math.floor(counter/10);
	const one= Math.floor(counter/1);
	ReactDOM.render(
		<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector('#app')
		);
		counter++;
},1000);


export default SecondsCounter;