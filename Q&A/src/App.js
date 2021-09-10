import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
	const [questions, setQuestins] = useState(data) //not really necessary
	return <main>
		<div className="container">
			<h3>Questions and Answers about login</h3>
			<section className="info">
				{questions.map((question) => {
					return <SingleQuestion key={question.id} {...question}/> //passing all properties using spread
				})}
			</section>
		</div>
	</main>
}

export default App;
