'use strict';


const preencherFormulario = (endereco) => {
    document.querySelector('#endereco').value = endereco.logradouro;
    document.querySelector('#bairro').value = endereco.bairro;
    document.querySelector('#cidade').value = endereco.localidade;
    document.querySelector('#estado').value = endereco.uf;
}

const pesquisarCep = async() => {
    const cep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const data = await fetch(url);
    const endereco = await data.json();
    preencherFormulario(endereco);
    
    
}

document.querySelector('#cep')
    .addEventListener('focusout', pesquisarCep);