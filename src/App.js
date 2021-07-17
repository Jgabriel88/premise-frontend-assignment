import { useState, useEffect } from 'react';
import ResposiveContainer from './components/Layout/ResponsiveContainer';
import './styles/variables.css';
import './styles/index.css';
import { sampleData } from './data/sampleData';
import Nav from './components/Layout/Nav';

let filteredData = {};

function App() {
	const [input, setInput] = useState('');
	const onChangeHanlder = (event) => {
		event.preventDefault();
		setInput(event.target.value);
	};

	useEffect(() => {
		filteredData = sampleData.filter((card) =>
			card.name.toLowerCase().match(input.toLocaleLowerCase())
		);
	}, [input]);

	return (
		<div className="App">
			<Nav onChangeHandler={onChangeHanlder} />
			{filteredData.length && <ResposiveContainer data={filteredData} />}
			{/* <ResposiveContainer data={sampleData} /> */}
		</div>
	);
}

export default App;
