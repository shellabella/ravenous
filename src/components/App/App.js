import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

 class App extends React.Component {
	    render() {
	
	  	return (
		
		<div className="App">
		  <h1>ravenous</h1>
		  <BusinessList />
		  <SearchBar/ > 
		</div>

		)
		}
 }
 
 //ReactDOM.render(<App />, document.getElementById('app'));
export default App;