import ResposiveContainer from './components/Layout/ResponsiveContainer';
import './styles/variables.css';
import './styles/index.css';
import { sampleData } from './data/sampleData';
import Nav from './components/Layout/Nav';

function App() {
	return (
		<div className="App">
			<Nav />
			<ResposiveContainer data={sampleData} />
		</div>
	);
}

export default App;
