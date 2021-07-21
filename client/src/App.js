import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Add from './components/Add/Add';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Post from './components/Post/Post';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/post/:id">
					<Post />
				</Route>
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
