const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const outputElement = document.querySelector('#output')
const convertButton = document.querySelector('#convert-btn')
const messageElement = document.querySelector('#message')



const convert = () => {
    const fromValue = fromElement.value
    const toValue = toElement.value

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return
    }

    console.log(fromValue, toValue);
}

convertButton.addEventListener("click", convert)