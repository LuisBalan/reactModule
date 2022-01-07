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

    const [inputMoney, setInputMoney] = useState(0);
    const [outputMoney, setOutputMoney] = useState(0);
    const [inputCurrency, setInputExchange] = useState('');
    const [outputCurrency, setOutputExchange] = useState('');

    // const enterInputMoney = (event) => {
    //     setInputCurrency()
    // }


    // useEffect(() => {}, )

    // const convertedMoney = () => {
    //     if()
    // }




    return(
        <div className="converter">
            <h2>Currency Exchange</h2>
            <div className="converterContainer">

                    <form className = 'currencyToConvert'>
                        <label for = 'inputMoney'></label>
                        <input name = 'inputMoney' id = 'inputMoney'type = 'number'
                        onChange={e => setInputMoney(e.target.value)}></input>
                        {console.log(inputMoney)}
                        <label for = 'inputCurrency'></label>
                        <select multiple = {false}
                                id = 'inputCurrency'>
                            {option}
                        </select>
                    </form>


                <form className="convertionResult">
                        <label for = 'ouputMoney'></label>
                        <input name = 'outputMoney' id = 'outputMoney' type = 'number'
                        onChange={e => setInputMoney(e.target.value)}></input>
                        <label for = 'outputCurrency'></label>
                        <select name = 'outputCurrency' multiple = {false} id = 'outputCurrency'>
                        {/* onChange={event => setOutputCurrency({outputCurrency: event.target.value})} */}
                            {option}
                        </select>
                </form>

            </div>
        </div>
    );
    
};

export default Converter;