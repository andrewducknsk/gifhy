// Lib
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Header from '../Header/Header';
import Trending from '../Trending/Trending';
import Random from '../Random/Random';
import Search from '../Search/Search';
// Style
import './main.scss';

const Greetind = props => (
	<p>
		My project to consolidate the knowledge of React + Redux and Redux-saga.
	</p>
);

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<main className='main-content'>
					<Switch>
						<Route exact path='/' component={Greetind} />
						<Route path='/trending' component={Trending} />
						<Route path='/random' component={Random} />
						<Route path='/search' component={Search} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
