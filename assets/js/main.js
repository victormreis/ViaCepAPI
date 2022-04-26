"use strict";

const preencherFormulario = (endereco) => {
  document.querySelector("#endereco").value = endereco.logradouro;
  document.querySelector("#bairro").value = endereco.bairro;
  document.querySelector("#cidade").value = endereco.localidade;
  document.querySelector("#estado").value = endereco.uf;
};

const limparFormulario = (endereco) => {
  document.querySelector("#endereco").value = "";
  document.querySelector("#bairro").value = "";
  document.querySelector("#estado").value = "";
  document.querySelector("#cidade").value = "";
};

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async () => {
  limparFormulario();
  const cep = document.querySelector("#cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    document.querySelector("#endereco").style.background = "#f7f6fa";
    const data = await fetch(url);
    const endereco = await data.json();
    if (endereco.hasOwnProperty("erro")) {
      document.querySelector("#endereco").style.background = "#ff000094";
      document.querySelector("#endereco").value = "CEP não encontrado!";
    } else {
      preencherFormulario(endereco);
      document.querySelector("#endereco").style.background = "#f7f6fa";
    }
  } else {
    document.querySelector("#endereco").value = "CEP inválido!";
    document.querySelector("#endereco").style.background = "#ff000094";
  }
};

document.querySelector("#cep").addEventListener("focusout", pesquisarCep);
