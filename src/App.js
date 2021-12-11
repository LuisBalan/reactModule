import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const fs = require('fs')
// const ENCODING = 'utf-8'
// const PATH_FILE = './utils/NavBar.json';

import data from './utils/NavBar.json'

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

function App() {
  const [content, setContent] = useState([]);

  console.log(data)
  const NavBarElements = Object.entries(data)
  console.log(NavBarElements)

  useEffect(() =>{
    setContent(NavBarElements)
  }, [])

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
              {content.map((item) => {
                return(
                  <div>
                    <h1>
                      {item[0]}
                    </h1>
                    
                      {item[1].map((item) => <h4>{item}</h4>)}
                    
                  </div>

                )
              })}
          </header>


        </div>

  )

  
}




export default App;
