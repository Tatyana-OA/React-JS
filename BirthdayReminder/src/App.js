import React, { useState } from 'react';
import data from './data';
import List from './List';
// people + useState uses data file
// setPeople is a setter which can be used to clear data as setting it to an empty array
// people are given to the List component where each person view is rendered.
// each person is destructured in the list component  using the data.js format 
function App() {
	const [people, setPeople] = useState(data);
  return <main>
	  <section className="container">
		  <h3>{people.length} birthdays today.</h3>
		  <List people={people} /> 
		  <button onClick={()=> setPeople([])}>Clear all</button>
	  </section>
  </main>
}

export default App;
