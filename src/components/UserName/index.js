import React from "react";

function UserName({ firstName, lastName }) {
	return (
		<div>
			<h1>
				{firstName} {lastName}
			</h1>
		</div>
	);
}

// function RickAndMortyCard(){
// 	return(
// 		<div>
// 			<p>{Name}</p>
// 			<p>{Status}</p>
// 			<p>{Species}</p>			
// 		</div>
// 	)
// }

export default UserName;
