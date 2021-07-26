const formulário1 = document.getElementById('formulário1') 
const formulário2 = document.getElementById('formulário2') 


formulárioCliente.addEventListener('submit', (e) => { 

e.preventDefault(); //impedir o evento de recarregar

let nome = document.getElementById('nome').value; 

let cpf = document.getElementById('CPF').value; 

let endereço = document.getElementById('endereço').value;

let email = document.getElementById('email').value;



let data = {
    nome,
    cpf,
    endereço,
    email,
}
let convertData = JSON.stringify(data);

localStorage.setItem("cliente", convertData)

})



formulárioProduto.addEventListener('submit', (e) => { 

    e.preventDefault(); //impedir o evento de recarregar
    
    let código = document.getElementById('cod').value; 
    
    let quantidade = document.getElementById('quant').value; 
    
    let preço = document.getElementById('preço').value;
    
    
    
    let dataProd = {
        código,
        quantidade,
        preço,
    }
    let convertData = JSON.stringify(dataProd);
    
    localStorage.setItem("produto", convertData)
    
    })
    


    function emailValidation(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").alert= "E-mail válido";
    }
    else{
    alert("E-mail inválido, por favor, verifique os dados cadastrados.");
    }
    }
