import React from 'react';
import ReactDom from 'react-dom';

//Creating a component. Always return JSX
function Greeting(){
	return (
		// Fragment doesnt create a div in the elements
		<React.Fragment>
			<div className='a-class'>
			<Person />
			<Message />
		</div>
		</React.Fragment>
	);

}
const Person = () => <h2>Tanya Asenova</h2>
const Message = () => {
	return <p>a para, para, paragraph</p>;
}
// Rendering a component inside of another component
// const Greeting = () => {
// 	return React.createElement('div', {}, React.createElement('h2', {}, 'An h1 inside of a div'))
// }


//Rendering the component into root in index.html
ReactDom.render(<Greeting />, document.getElementById('root'));
