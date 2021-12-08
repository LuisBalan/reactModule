import React from 'react';


const capitalizeWord = (word) => {
    if(!word){
        return "";
    }else{

        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
}


function FullName({firstName, lastName}){
    
    return <div>
            <h1>
                Hola {capitalizeWord(firstName)} {capitalizeWord(lastName)}
            </h1>
            </div>
}

export default FullName;