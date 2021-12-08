import React from 'react';

const operators = ['suma',
                    'resta',
                    'multiplicacion',
                    'division',
                    'potencia'
                ]
  


function Calculator({firstNumber, secondNumber, operator}){
    let content
    let minOperator = operator.toLowerCase()
    if(isNaN(firstNumber)  || isNaN(secondNumber)){
        content = 'Uno o mas valores no son numeros'

    }else if(!operators.includes(minOperator)){
        content = 'Se ha ingresado un operador no valido'
    }else{

        switch(minOperator){
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
            case "potencia":
                content = firstNumber**secondNumber
                break
            default:

        }
    }

    return( <div>
        <h1>{content}</h1>
        </div>)

}

export default Calculator;
