import ResposiveContainer from './components/Layout/ResponsiveContainer';
import './styles/variables.css';
import './styles/index.css';
import { sampleData } from './data/sampleData';

function App() {
	return (
		<div className="App">
			<ResposiveContainer data={sampleData} />
		</div>
	);
}

export default App;
