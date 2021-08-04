import React from 'react';
import ReactDom from 'react-dom';

//Creating a component. Always return JSX
function Greeting(){
	return (
		// Fragment doesnt create a div in the elements
		<React.Fragment>
			<div className='a-class'>
			<h3>Hello, world!</h3>
			<ul>
				<li>List Item 1</li>
				<li>List Item 2</li>
		<img />
		<input />
			</ul>
		</div>
		</React.Fragment>
	);
	//return React.createElement('h1, {}, 'hello world');
}

// Rendering a component inside of another component
// const Greeting = () => {
// 	return React.createElement('div', {}, React.createElement('h2', {}, 'An h1 inside of a div'))
// }


//Rendering the component into root in index.html
ReactDom.render(<Greeting />, document.getElementById('root'));
