import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Add from './components/Add';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/add">
					<Add />
				</Route>
				<Route path="/">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
