//Project dependencies (node-modules) are imported with relative paths
import React from 'react';
import ReactDom from 'react-dom';

//CSS -> not a dependency, path is needed
import './index.css'

//Creating a component. Always return JSX
function Booklist(){
	return (
		// Fragment doesnt create a div in the elements
		<React.Fragment>
			<section className='booklist'>
		<Book />
		<Book />
		<Book />
		<Book />
		</section>
		</React.Fragment>
	);

}

const Book = () => {
	return <article className = 'book'>
		<Image />
		<Title />
		<Author />
	</article>
}
const Image = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/41XCj4P4sML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />;
}
const Author = () => <h5 style={{color: '#617d98', fontSize: '0.75rem'}}>Author: Lori Gottlieb </h5>
const Title = () => <h4>Title: Maybe You Should Talk to Someone</h4>

// Rendering a component inside of another component
// const Booklist = () => {
// 	return React.createElement('div', {}, React.createElement('h2', {}, 'An h1 inside of a div'))
// }


//Rendering the component into root in index.html
ReactDom.render(<Booklist />, document.getElementById('root'));
