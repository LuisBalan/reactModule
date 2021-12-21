import react from "react";


import "./CreditCard.css" 
function Card(){


    return(<div>
        <div className="CardSides">
            <div className = 'FrontCard'>

            </div>
            <div className = 'BackCard'>

            </div>

        </div>
        <div className="DataInputs">
            <form className="FieldsContainer">
                <label htmlFor="number">Number</label>
                <input type = 'number' name = 'number' id = 'number'></input>
                <label htmlFor="name">Name</label>
                <input type = 'text' name = 'name' id = 'name'></input>
                <label htmlFor="ExpirationDate">Valid Thru</label>
                <input type = 'text' name = 'ExpirationDate' id = 'ExpirationDate'></input>
                <label htmlFor="CVV">CVV</label>
                <input type = 'number' name = 'CVV' id = 'CVV'></input>
            </form>
            
        </div>
    </div>)
}

export default Card;