import React from 'react';
import './Businesslist.css';
import ReactDOM from 'react-dom';
import Business from '../Business/Business';

  class BusinessList extends React.Component {
	    render() {
				  	return (<div className="BusinessList">
  <Business />
  <Business />
    <Business />
  <Business />
</div>);
		}
			
		}

//ReactDOM.render(<BusinessList />, document.getElementById('app'));
export default BusinessList;