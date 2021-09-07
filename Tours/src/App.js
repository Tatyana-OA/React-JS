import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]); //default value of tours is an empty array
	
	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	}
	const fetchTours = async () => {
		setLoading(true); // so while fetching data it can always be true
		try {
			const response = await fetch(url);
			const tours = await response.json();
			console.log(tours);
			setLoading(false); // because we have tours now
			setTours(tours);
		} catch(err) {
			setLoading(false);
			console.log(err);
		}

	};

	// useEffect is used so the fetching can be done once and actually called

useEffect(() => {
	fetchTours();
}, [])

	if (loading) {
		return (<main>
			<Loading />
		</main>
		);
	}
	//if all tours have been "not interested" -ed :D 
	if (tours.length ===0) {
		return ( <main>
			<h2>No tours left</h2>
			<button class="btn" onClick={() => fetchTours()}>Refresh</button>
		</main>
		);
	}
	//removeTour function is passed to tours component
  return ( <main>
	  <Tours tours={tours} removeTour={removeTour}/>
  </main>
  );
}

export default App
