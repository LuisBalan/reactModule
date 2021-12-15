import React from "react";

const NextButtonValidator = (NumberPage) => {
    if (NumberPage >= 0){
        NumberPage += NumberPage
    }else if(NumberPage === 42){
        NumberPage === 42
    }

}

const PrevButtonValidator = (NumberPage) => {
    if (NumberPage >= 0){
        NumberPage += NumberPage
    }else if(NumberPage === 42){
        NumberPage === 42
    }
}


function NextButton(NumberPage){
   return (
    <button onClick ={NumberPage += 1 }>Next</button>
       );       
};

function PrevButton(NumberPage){
    return(
        <button onClick = {NumberPage -= 1}>Prev</button>
    )

}
