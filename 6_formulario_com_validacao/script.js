const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelector(".error-message");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
});

function setError(input, errorMessage){
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add("error");
}

function validateInputs(){
    const nomeValue = nome.value.trim();    
    const emailValue = email.value.trim();    
    const assuntoValue = assunto.value.trim();    
    const mensagemValue = mensagem.value.trim();    

    if(nomeValue === ""){
        setError(nome, "Nome não pode ficar em branco");
    }
    if(emailValue === ""){
        setError(email, "E-mail não pode ficar em branco");
    }
    if(assuntoValue === ""){
        setError(assunto, "Assunto não pode ficar em branco");
    }
    if(mensagemValue === ""){
        setError(mensagem, "Mensagem não pode ficar em branco");
    }
}