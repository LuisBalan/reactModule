import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CharacterCard from "./components/RickAndMortyCard";

// Components
// import NavBar from "./components/NavBar";
// import UserName from "./components/UserName";
// import RickAndMortyCard from './components/RickAndMortyCard';

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		// await fetch()
		// const getUsers = async () => {
		// 	const response = await fetch('users.json')
		// 	console.table(response)
		// 	const data = await response.json();
		// 	console.log(data)
		// 	setUsers(data)

    const getCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      console.table(response);
      const data = await response.json();
      const allCharacters = data.results;
      console.log(allCharacters);
      setCharacters(allCharacters)
    }

    // const getCards = async() => {
    //   const response = await fetch('https://rickandmortyapi.com/api')
    //   console.log(response)
    // getUsers();

    getCharacters();


  }, []);

	// const usersUI = users.map(({ id, firstName, lastName }) => (
	// 	<UserName key={id} firstName={firstName} lastName={lastName} />
	// ));


  const cards = characters.map((item) => {
    return(
      <CharacterCard key={`char${item.id}`} Name = {item.name} Status = {item.status} Species = {item.species} Image = {item.image} />
    )
  })

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <NavBar />
				{usersUI} */}
        {cards}
			</header>
		</div>
	);
}

export default App;
