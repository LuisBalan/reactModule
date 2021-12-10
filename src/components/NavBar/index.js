import React from 'react';
import { useState } from 'react';


import './NavBar.css'

//think on what item is active

function NavBar() {
    const [active, setActive] = useState(0)

    const handleClick = (itemID) => {
        setActive(itemID)
    }

    const checkActive = (itemID) => (active === itemID? "clickOn": "")
    return(
        <div>
            <ul>
                <button onClick = {() => setActive(1)} className = {active === 0? "clickOff":"clickOn"}>Item 1</button>
                <button onClick = {() => setActive(1)} className = {active === 0? "clickOff":"clickOn"}>Item 2</button>
                <button onClick = {() => setActive(1)} className = {active === 0? "clickOff":"clickOn"}>Item 3</button>
            </ul>

        </div>
    )
    
}



// function NavBar(){
//     return(
//         <div>
//             <ul>
//                 <li className = "btn clickOn">Item 1</li>
//                 <li className = "btn clickOff">Item 2</li>
//                 <li className = "btn clickOff">Item 3</li>
//             </ul>
//         </div>
//     )
// }

// function NavBar(){
//     return(
//         <div>
//             {listItems}
//         </div>

//         )
// }
// export default NavBar





export default NavBar