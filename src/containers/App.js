import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data =>this.setState({robots:data}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})	
	}
	render() {
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filterRobots);
		return (
		<div className = "tc">
			<h1 id='style' className = "f1">Robofriends</h1>
			<SearchBox searchChange = {this.onSearchChange}/>
			<Scroll>
				<CardList robots= {filterRobots}/>
			</Scroll>
		</div>
		);
	}
}

export default App;

