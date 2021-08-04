//Project dependencies (node-modules) are imported with relative paths
import React from 'react';
import ReactDom from 'react-dom';

//CSS -> not a dependency, path is needed
import './index.css'

//Var setup
const firstBook = {
	image:'https://images-na.ssl-images-amazon.com/images/I/41XCj4P4sML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
	title:  'Maybe You Should Talk to Someone',
	author: 'Lori Gottlieb '
}
const secondBook = {
	image:'https://images-na.ssl-images-amazon.com/images/I/51vWTv4E+jL._SY344_BO1,204,203,200_.jpg',
	title:  'We Were Never Here',
	author: 'Andrea Bartz'
}

//Creating a component. Always return JSX
function Booklist(){

	return (
		// Fragment doesnt create a div in the elements
		<React.Fragment>
			<section className='booklist'>
		<Book img = {firstBook.image} title = {firstBook.title} author = {firstBook.author}>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam ea eaque iusto aliquid illum sunt cupiditate quasi vitae impedit.</p>
		</Book>
		<Book img = {secondBook.image} title = {secondBook.title} author = {secondBook.author} />
		</section>
		</React.Fragment>
	);

}
// use "children" to display anything that is inside the component -> example: paragraph
const Book = ({img,title,author,children}) => {
	//can be destructured
	// const {img,title,author} = props
	return <article className = 'book'>
		<img src={img} alt="" />;
		<h4>Title:{title}</h4>
		<h5 style={{color: '#617d98', fontSize: '0.75rem'}}> Author: {author.toUpperCase()} </h5>
		{children}
	</article>
}

// Rendering a component inside of another component
// const Booklist = () => {
// 	return React.createElement('div', {}, React.createElement('h2', {}, 'An h1 inside of a div'))
// }


//Rendering the component into root in index.html
ReactDom.render(<Booklist />, document.getElementById('root'));
