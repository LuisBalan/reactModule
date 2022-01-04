import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./App.css";

import Appcontainer from './components/AppContainer'


// function App() {
// 	return <div className="container">App</div>;
// }

class App extends Component{
	render(){
		return(
			<AppContainer>
				<Outlet />
			</AppContainer>
		)
	}
}

export default App;