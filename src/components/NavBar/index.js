import React, { useState } from "react";

// Styles
import "./NavBar.css";

function NavBar() {
	const [active, setActive] = useState(0);

	return (
		<div className = 'itemsContainer'>
			<ul>
				<li className={active === 1? 'clickOn':''} onClick={() => setActive(1)}>
					Item 1
				</li>
				<li className={active === 2? 'clickOn':''} onClick={() => setActive(2)}>
					Item 2
				</li>
				<li className={active ===3? 'clickOn': ''} onClick={() => setActive(3)}>
					Item 3
				</li>
			</ul>
		</div>
	);
}

export default NavBar;



