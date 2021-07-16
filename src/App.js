import './styles/variables.css';
import { sampleData } from './data/sampleData';
import Card from './components/UI/Card';
import CommonButtonGroup from './components/Layout/CommonButtonGroup';

function App() {
	let eachCard = sampleData.map((data) => {
		return (
			<Card key={data.id}>
				<h1>{data.name}</h1>
				<p>{data.intents}</p>
				<CommonButtonGroup />
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
