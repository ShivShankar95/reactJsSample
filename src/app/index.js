import React from  "react";
import { render } from "react-dom";
import Request from "superagent";
import _ from 'lodash';
class App extends React.Component  {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {

		var url = "http://services.odata.org/Northwind/Northwind.svc/Regions?$format=json";
		Request.get(url).then( (response) => {

			this.setState({
				regions: response.body.value
			})
		}

			);

	}
	render() {


		var list = _.map(this.state.regions, (region) =>{
			return	<li className="list-group-item" key={region.RegionID}> {region.RegionDescription} </li>;
			});

		return  (
  
  
    
    <div className="card">
    <div className="card-title">
    <div className="card-text" style={{
    	width: 20 + "%" 
    }}>    
    <ul className="list-group"> {list} </ul> 
    </div>
    </div>
    </div>
    
  		
		
		);
	}
}
render(<App/>,document.getElementById('App'));