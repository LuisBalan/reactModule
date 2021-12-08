import React from 'react';

const operators = ['suma',
                    'resta',
                    'multiplicacion',
                    'division',
                    'potencia'
                ]


// function operationResult({firstNumber, secondNumber, operator}){
//     let content
//     if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber)){
//         content = 'Uno o mas valores no son numeros'

//     }else if(!operators.includes(operator)){
//         content = 'Se ha ingresado un operador no valido'
//     }else{

//         switch(operator){
//             case 'suma':
//                 content = firstNumber + secondNumber
//                 break
//             case 'resta':
//                 content = firstNumber - secondNumber
//                 break
//             case 'multiplicacion':
//                 content = firstNumber*secondNumber
//                 break
//             case 'division':
//                 content = firstNumber/secondNumber
//                 break
//             case "potenciacion":
//                 content = firstNumber**secondNumber
//                 break
//             default:
//             content = "operador no valido";
//         }
//     }

//     return content

// }


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
                //  content = "operador no valido";
        }
    }

    return( <div>
        <h1>{content}</h1>
        </div>)

}

// const Calculator = ({firstNumber, secondNumber, operator}) => {
//     return <div>
//             <h1>{operationResult(firstNumber, secondNumber, operator)}</h1>
//          </div>
// }

export default Calculator;
