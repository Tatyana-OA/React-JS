import React, { useState } from 'react';
import data from './data';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	// Setting amount of paragraphs from data array to be used in the return triggered by the form submit click.
	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		// If zero or less, display just 1 para. If more than all paras, set all paras.
		if (count<=0) {
			amount = 1;
		} if (count>8) {
			amount = 8;
		}
		setText(data.slice(0,amount));
	}
  return (
  <section className="section-center">
	  <h3>Tired of boring lorem ipsum?</h3>
	  <form className="lorem-form" onSubmit={handleSubmit}>
		  <label htmlFor="amount">paragraphs:</label>
		  <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
		  <button type="submit" className="btn">generate</button>
	  </form>
	  <article className="lorem-text">
		  {/* Returning a paragraph for each data array item */}
		  {text.map((item,index)=>{
			  return <p key={index}>{item}</p>
		  })}
	  </article>
  </section>
    )
}

export default App;
