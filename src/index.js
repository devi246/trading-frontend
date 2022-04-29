import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./routes/about";

import Offerings from "./Offer/Offers";
import OffersIndex from "./Offer/OffersIndex";
import Offer from "./Offer/Offer";
import NewOffer from "./OfferNew/NewOffer";

import User from "./User/User";
import Users from "./User/Users";
import UsersIndex from "./User/UsersIndex";
import Login from "./User/Login";

import TestPage from "./test/TestPage";

import Start from "./Start";


const root = ReactDOM.createRoot(document.getElementById('root'));

/*
	This class "wraps" the routes. It provides handling for logins
*/
class Wrap extends React.Component {
	constructor(props) {
		super(props)
		this.state = { user: "" }
		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
	}

	componentDidMount() {
		//console.log("WRAP MOUNTED")
		const user = sessionStorage.getItem('user');
		if (user != null) this.setState( { user: user } )
	}

	login(name) {
		console.log("WRAP LOGIN: ", name)
		sessionStorage.setItem('user', name);
		this.setState({ user: name })
	}

	logout() {
		console.log("WRAP LOGOUT")
		sessionStorage.removeItem('user');
		this.setState({ user: "" })
	}

	render() {

	let user = this.state.user

	return(

		<BrowserRouter>
		<React.StrictMode>
		
		<Routes>
		  <Route path="/" element={<App logout={this.logout} user={user} />} >
		
		  <Route
				index
				element={<Start />}
			  />
	
			<Route path="users" element={<Users />} >
				<Route index element={<UsersIndex />} />
				<Route path=":userName" element={<User user={user} />} />
				{/*<Route path=":userId/edit" element={<UserEdit />} />*/}
			</Route>
	
			<Route path="login" element={<Login user={user} login={this.login} />} />
	
			<Route path="offers" element={<Offerings />} >
				<Route index element={<OffersIndex />} />
				<Route path=":id" element={<Offer user={user} />} />
				<Route path="new" element={<NewOffer user={user} />} />
			</Route>
	
			<Route path="test" element={<TestPage />} />

			<Route path="about" element={<About />} />
	
	
		  </Route>
	
		  {/* 404 */}
		  <Route
			path="*"
			element={
			  <main style={{ padding: "1rem" }}>
				<p>404 - Nothing here</p>
			  </main>
			}
		  />
	
		</Routes>
	
		</React.StrictMode>
	  </BrowserRouter>


	)
	}
}

root.render(
	<Wrap/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
