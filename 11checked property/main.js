//.checked property - sprawdzanie czy cos jest zaznaczone czy nie.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed`
    }
    else{
        subResult.textContent = `you are unsubscribed`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with visa`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with master card`
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you are paying with paypal card`
    }
    else{
        paymentResult.textContent = `you are not paying.`
    }
}