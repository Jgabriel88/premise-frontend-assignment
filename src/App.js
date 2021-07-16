import './styles/variables.css';
import { sampleData } from './data/sampleData';
import Card from './components/UI/Card';

function App() {
	let eachCard = sampleData.map((data) => {
		return (
			<Card>
				<h1>{data.name}</h1>
				<p>{data.intents}</p>
			</Card>
		);
	});

	return (
		<div className="App">
			{/* Add Responsive container component here. Render the card components inside of that component.  */}
			<div>{eachCard}</div>
		</div>
	);
}

export default App;
