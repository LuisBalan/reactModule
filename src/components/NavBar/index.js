import React, { useState } from "react";

// Styles
import "./NavBar.css";

function NavBar() {
	const [active, setActive] = useState(0);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");
	const checkActiveContent = (itemID) => (active === itemID ? true: false);
	const classNameAssigner = (itemID) => (active === itemID?"activeClass" : "nonActiveClass");

    let content

   switch (active) {
       case 1:
           content = "Contenido 1";
           break;
        
        case 2:
            content = "Contenido 2";
            break;
        case 3:
            content = "Contenido 3";
            break
       default:
           content = "";
           break;
   }

	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={(e) => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
			</ul>
            <>
                <div className = 'contentContainer'>{content}</div>
            </>
			<>
				<ul>
					{checkActiveContent(1)? <li>hola 1</li>: ""}
					{checkActiveContent(2)? <li>hola 2</li>: ""}
					{checkActiveContent(3)? <li>hola 3</li>: ""}
				</ul>
			</>
			<>
				<ul>
					<h1 className = {classNameAssigner(1)}>hola 1</h1>
					<h1 className = {classNameAssigner(2)}>hola 2</h1>
					<h1 className = {classNameAssigner(3)}>hola 3</h1>

				</ul>
			</>
		</div>
        
	);
}

export default NavBar;



