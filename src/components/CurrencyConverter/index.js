import React, { useState } from "react";
import './CurrencyConverter.css'

function Converter(){

    const [inputCurrency, setInputCurrency] = useState(0);
    const [outputCurrency, setOutputCurrency] = useState(0);
    const [inputExchange, setInputExchange] = useState('');
    const [outputExchange, setOutputExchange] = useState('');

    const enterInputMoney = (event) => {
        setInputCurrency()
    }

    return(
        <div className="converter">
            <h2>Currency Exchange</h2>
            <div className="converterContainer">
                {/* <div className = 'currencyToConvert'> */}
                    <form className = 'currencyToConvert'>
                        <label for = 'inputMoney'></label>
                        <input name = 'inputMoney' id = 'inputMoney'type = 'number'></input>
                        <label for = 'inputCurrency'></label>
                        <select multiple = {false} label = 'inputCurrency'>
                            <option selected value = 'Mexican Peso'>Mexican Peso</option>
                            <option value = 'Peruvian Sol'>Peruvian Sol</option>
                            <option value = 'Guatemalan Quetzal'>Guatemalan Quetzal</option>
                            <option value = 'Euro'>Euro</option>
                        </select>
                    </form>
                {/* </div> */}
                {/* <div className="convertionResult"> */}
                <form className="convertionResult">
                        <label for = 'ouputMoney'></label>
                        <input name = 'outputMoney' id = 'outputMoney' type = 'number'></input>
                        <label for = 'outputCurrency'></label>
                        <select name = 'outputCurrency' multiple = {false} id = 'outputCurrency'
                        onChange={event => setOutputCurrency({outputCurrency: event.target.value})}>
                            <option value = 'Mexican Peso'>Mexican Peso</option>
                            <option value = 'Peruvian Sol'>Peruvian Sol</option>
                            <option value = 'Guatemalan Quetzal'>Guatemalan Quetzal</option>
                            <option value = 'Euro'>Euro</option>
                        </select>
                    </form>
                {/* </div> */}
            </div>
    </div>
    )
    
};

export default Converter;