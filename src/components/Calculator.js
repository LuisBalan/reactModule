import React from 'react';

const operators = ['suma',
                    'resta',
                    'multiplicacion',
                    'division',
                    'potenciacion'
                ]


const opResult = ({firstNumber, secondNumber, operator}) => {
    let content
    if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber)){
        content = 'Uno o mas valores no son numeros'

    }else if(!operators.includes(operator)){
        content = 'Se ha ingresado un operador no valido'
    }else{

        switch(operator){
            case 'suma':
                content = firstNumber + secondNumber
                break
            case 'resta':
                content = firstNumber - secondNumber
                break
            case 'multiplicacion':
                content = firstNumber*secondNumber
                break
            case 'division':
                content = firstNumber/secondNumber
                break
            case "potenciacion":
                content = firstNumber**secondNumber
                break
        }
    }

    return content

}

const Calculator = ({firstNumber, secondNumber, operator}) => {
    return <div>
            <h1>{opResult(firstNumber, secondNumber, operator)}</h1>
         </div>
}

export default Calculator;
