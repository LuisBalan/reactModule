import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


// const fs = require('fs')
// const ENCODING = 'utf-8'
// const PATH_FILE = './utils/NavBar.json';

// import data from './utils/NavBar.json'
// import NavBarCategories from './components/NavBarCategories';


//Components

// import Greeting from './components/Greeting';
// import FullName from './components/FullName';
// import Calculator from './components/Calculator';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Hello
//         </a>
//       <Greeting />
//       <FullName firstName = "luis" lastName = "balan" />
//       <Calculator firstNumber = {1} secondNumber = {2} operator = "suma" />
//       <NavBar />
//       </header>
//     </div>
//   );
// }

const NavBarCategories = {
  Guitars: {
    sub1: "Electric", 
    sub2: "Acoustic", 
    sub3: "Electroacoustic"
  }, 
  Basses: {
    sub1: "Electric", 
    sub2: "Acoustic", 
    sub3: "Electroacoustic"
  }, 
  Keyboards: {
    sub1: "Digital", 
    sub2: "Acoustic", 
    sub3: "Synthesizers"
  }, 
  Drums: {
    sub1: "Drums", 
    sub2: "Cymbals", 
    sub3: "Accesories"
  }, 
  Studio: 
  {
    sub1: "Audio Interfaces", 
    sub2: "Monitors", 
    sub3: "Microphones"
  }
}

console.log(Object.entries(NavBarCategories))
console.log(Object.keys(NavBarCategories))
console.log(Object.values(NavBarCategories))


const NavBarEntries = Object.entries(NavBarCategories)
// const NavBarKeys = Object.keys(NavBarCategories)
// const NavBarValues = Object.values(NavBarCategories)

function App() {
  const [content, setContent] = useState([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    // await fetch()
    setTimeout(() => {

      setContent(NavBarEntries)

    }, 3000);
  }, []);

  const handleClick = (itemID) => {
		setActive(itemID);
	};

  const checkActive = (itemID) => (active === itemID ? "li-active" : "");




  // console.log(data)
  // const NavBarElements = Object.entries(data)
  // console.log(NavBarElements)

//  setContent(NavBarEntries)


  // const categoriesList = content.map((item) => {
  //   return <NavBarCategories key = {`_${item[0]} `} categories = {item[0]} />
  // })
  

  return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React Hello
            </a>
            {/* {categoriesList} */}
            <ul>
              {content.map((item, index) => {
              return(
            
                  // <li key = {`_${item[0]}`} onClick = {() => setActive[index]} className = {active === index? "li-active" : ''}> 
                  <li key = {`_${item[0]}`} onClick = {handleClick(index)} className = {checkActive(index)}> 
                    {item[0]}
                  </li>
                
              )
            })}

            </ul>



          </header>


        </div>

  )

  
}




export default App;
