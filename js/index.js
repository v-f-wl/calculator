const switchBtn = document.getElementById('switch')
const app = document.getElementById('app')
const resoultField = document.getElementById('result-count')
const inputField = document.getElementById('coult-stroke')
const buttonsField = document.getElementById('btns-form')
const buttonClear = document.getElementById('btn-clear')
const btnResoult = document.getElementById('btn-resoult')

// переменные для храниения чисел 
const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'x', '/']
let number1 = ''
let number2 = ''
let sign = ''
let finish = false

// Цветовая тема калькулятора
window.addEventListener('load', () => {
    if(localStorage.getItem('theme') == 'dark'){
        app.classList.add('color')
    } else{
        localStorage.setItem('theme', 'light')
    }
})
switchBtn.onclick = changeTheme
function changeTheme(){
    if(localStorage.getItem('theme') == 'light'){
        app.classList.add('color')
        localStorage.setItem('theme', 'dark')
        return
    }
    if(localStorage.getItem('theme') == 'dark'){
        app.classList.remove('color')
        localStorage.setItem('theme', 'light')
    }
}

// Очистка полей 
buttonClear.onclick = clearAllField
function clearAllField(){
    number1 = ''
    number2 = ''
    sign = ''
    finish = false
    inputField.textContent = '0'
    resoultField.textContent = ''
    return
}

// Проверка кнопок на нажатие
buttonsField.onclick = (event) => {
    if(!event.target.classList.contains("btn-style")) return
    if(event.target.classList.contains("btn-resoult")) return
    if(event.target.classList.contains("btn-nan")) return
    if(event.target.classList.contains("bnt-color")) return



    let key = event.target.textContent
    if(digit.includes(key) && sign == ''){
        if(number1.length < 4){
            number1 += key
            inputField.textContent = number1
        }
    } 
    if(digit.includes(key) && sign !== ''){
        if(number2.length < 4){
            number2 += key
            inputField.textContent = number2
        }
        // number2 += key
        // inputField.textContent = number2
    }
    if(action.includes(key) && !number1 == ''){
        sign = key
        inputField.textContent = key
        return
    }

    if(number1 !== "" && number2 !== "" && finish){
        finish = false
        number2 = key
        inputField.textContent = key
    }
}



//Подсчет входных данных 

btnResoult.onclick = resouldMath

function resouldMath(){
    switch(sign){
        case "+":
            number1 = (+number1) + (+number2)
            if (!Number.isInteger(number1)) {
                number1 = number1.toFixed(4) 
            }
            break
        case "-":
            number1 = number1 - number2
            if (!Number.isInteger(number1)) {
                number1 = number1.toFixed(4) 
            }
            break
        case "x":
            number1 = number1 * number2
            if (!Number.isInteger(number1)) {
                number1 = number1.toFixed(4) 
            }
            break
        case "/":
            number1 = number1 / number2
            if (!Number.isInteger(number1)) {
                number1 = number1.toFixed(4)
            }
            break
        default: 
    }
    finish = true
    resoultField.textContent = number1
}




