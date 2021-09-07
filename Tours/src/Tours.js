import React from 'react';
import Tour from './Tour';
 //removeTour function continues to be passed
const Tours = ({tours, removeTour}) => {
  return (
  <section>
	  <div className="title">
		  <h2>Our Tours</h2>
		  <div className="underline">
		  </div>
		  <div>
			 
			  {tours.map((tour) => {
			  return <Tour key={tour.id} {...tour} removeTour = {removeTour} ></Tour> //in the tour component all properties in the object will be spread
			})}
		  </div>
	  </div>
  </section>
	);
};

export default Tours;
