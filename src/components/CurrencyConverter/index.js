import React, { useState } from "react";
import './CurrencyConverter.css'

function Converter(){

    // const currencies = ['Euro', 'GuatemalanQuetzal', 'MexicanPeso', 'PeruvianSol']  

    const factors = [
        {
            name: 'Euro',
            dolarEquivalence: 1.13

        },
        {
            name: 'Guatemalan Quetzal',
            dolarEquivalence: 0.13
        },
        {
            name: 'Mexican Peso',
            dolarEquivalence: 0.049
        },
        {
            name: 'Peruvian Sol',
            dolarEquivalence: 0.25
        }
    ];


const option = factors.map((item) => {
    return(
        <option value = {item.name.split(' ').join('')}>{item.name}</option>
    );
});



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

                    <form className = 'currencyToConvert'>
                        <label for = 'inputMoney'></label>
                        <input name = 'inputMoney' id = 'inputMoney'type = 'number'></input>
                        <label for = 'inputCurrency'></label>
                        <select multiple = {false} label = 'inputCurrency'>
                            {option}
                        </select>
                    </form>


                <form className="convertionResult">
                        <label for = 'ouputMoney'></label>
                        <input name = 'outputMoney' id = 'outputMoney' type = 'number'></input>
                        <label for = 'outputCurrency'></label>
                        <select name = 'outputCurrency' multiple = {false} id = 'outputCurrency'
                        onChange={event => setOutputCurrency({outputCurrency: event.target.value})}>
                            {option}
                        </select>
                    </form>

            </div>
    </div>
    )
    
};

export default Converter;