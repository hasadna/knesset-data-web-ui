import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtocolPage from "./components/ProtocolPage";
import TopicPage from "./components/TopicPage";


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header/>

					<Route exact path="/" component={MainPage}/>
					<Route path="/search" component={MainPage}/>
					<Route path="/members" component={TopicPage}/>
					<Route exact path="/committees/" component={TopicPage}/>
					<Route exact path="/committees/:committeeId" component={TopicPage}/>
					<Route path="/committees/:committeeId/:meetingId" component={ProtocolPage}/>

					<Footer/>
				</div>
			</Router>
		);
	}
}

export default App;
