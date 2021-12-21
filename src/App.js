import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/CreditCard";

// Components
// import NavBar from "./components/NavBar";
// import UserName from "./components/UserName";
// import RickAndMortyCard from './components/RickAndMortyCard';

function App() {



 

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}

			<Card />
			</header>
		</div>
	);
}

export default App;
