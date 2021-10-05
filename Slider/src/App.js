import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
// Full functionality is purposefully jammed in the App component to try and work with a bigger component.
function App() {
 const [people, setPeople] = useState(data); //Array of people imported above
 const [index, setIndex] = useState(0);
// Looping back and forth after last and before previous.
 useEffect(()=>{
	const lastIndex = people.length-1;
	if (index<0) {
		setIndex(lastIndex);
	} if (index>lastIndex) {
		setIndex(0);
	}
 }, [index,people]);
 // Every 3 seconds, the slider changes
 useEffect(()=> {
	let slider = setInterval(() => {
		setIndex(index + 1)
	},3000)
	//so everytime we click, this useEffect is not triggered.
	return () => clearInterval(slider);
 }, [index])
  return <section className ="section">
	  <div className="title">
		  <h2>
			  <span>/</span>reviews
		  </h2>
	  </div>
	  <div className="section-center">
		  {people.map((person,personIndex)=>{
			  const {id, image, name, title, quote} = person;
			  let position = 'nextSlide'; //className
			  if (personIndex === index) {
				  position = 'activeSlide';
			  }
			  if (personIndex === index-1 || (index === 0 && personIndex == people.length-1)) {
				  position = 'lastSlide';
			  }
		  return ( 
		  <article className={position} key={id}>
		  <img src={image} alt={name} className='person-img' />
		  <h4>{name}</h4>
		  <p className="title">{title}</p>
		  <p className="text">{quote}</p>
		  <FaQuoteRight className = 'icon' />
		  </article>
		  );
		})}
		<button className="prev" onClick={() => setIndex(index-1)}>
			<FiChevronLeft />
		</button>
		<button className="next" onClick={() => setIndex(index+1)}>
			<FiChevronRight />
		</button>
	  </div>
	  </section>;
}

export default App;
