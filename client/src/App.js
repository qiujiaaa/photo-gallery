import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Add from './components/Add/Add';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import EditPost from './components/EditPost/EditPost';
import { checkAuth } from './actions/user';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkAuth());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				<AuthenticatedRoute path="/user/:id">
					<Profile />
				</AuthenticatedRoute>
				<AuthenticatedRoute path="/post/edit/:id">
					<EditPost />
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
