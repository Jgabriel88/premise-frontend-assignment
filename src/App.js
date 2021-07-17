import React, { useState, useEffect } from 'react';
import ResposiveContainer from './components/Layout/ResponsiveContainer';
import './styles/variables.css';
import './styles/index.css';
import { sampleData } from './data/sampleData';
import Nav from './components/Layout/Nav';

function App() {
	const [input, setInput] = useState('');
	const getFilteredSampleData = () => {
		if (input) {
			return sampleData.filter((card) =>
				card.name.toLowerCase().match(input.toLowerCase())
			);
		}
		return sampleData;
	};

	const onChangeHanlder = (event) => {
		event.preventDefault();
		setInput(event.target.value);
	};

	return (
		<div className="App">
			<Nav onChangeHandler={onChangeHanlder} />
			<ResposiveContainer data={getFilteredSampleData()} />
		</div>
	);
}

export default React.memo(App);
