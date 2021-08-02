import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Add from './components/Add/Add';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Post from './components/Post/Post';

function App() {
	console.log(useSelector((state) => state.auth));

	const AuthenticatedRoute = ({ component: Component, ...rest }) => {
		if (useSelector((state) => state.auth.isAuth)) {
			return <Route {...rest} />;
		}
		return <Redirect to="/login" />;
	};

	const LoginRoute = ({ component: Component, ...rest }) => {
		if (useSelector((state) => state.auth.isAuth)) {
			return <Redirect to="/dashboard" />;
		}
		return <Route {...rest} />;
	};

	return (
		<Router>
			<Header />
			<Switch>
				<LoginRoute path="/login">
					<Login />
				</LoginRoute>
				<AuthenticatedRoute path="/dashboard">
					<Dashboard />
				</AuthenticatedRoute>
				<AuthenticatedRoute path="/post/:id">
					<Post />
				</AuthenticatedRoute>
				<AuthenticatedRoute path="/add">
					<Add />
				</AuthenticatedRoute>
				<AuthenticatedRoute component={Error} />
			</Switch>
		</Router>
	);
}

export default App;
