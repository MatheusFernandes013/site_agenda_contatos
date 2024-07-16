const form = document.getElementById("form-agenda");
const nomeContato = [];
const telefoneContato = [];
let linhas = '';
let formEValido = false;
const inputNomeContato = document.getElementById('nome-contato');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function validaNome(nomeCompleto) {
    const nomeComoArrey = nomeCompleto.split(' ');
    return nomeComoArrey.length >= 2;
}

function adicionaLinha(){
    const inputTelefoneContato = document.getElementById('telefone-contato');

    formEValido =validaNome(inputNomeContato.value);
    if (formEValido){
        if(nomeContato.includes(inputNomeContato.value) || telefoneContato.includes(inputTelefoneContato.value)){
            alert(`O contato:  ${inputNomeContato.value} ou o telefone: ${inputTelefoneContato.value} já foi inserido!`);
        }else {
            nomeContato.push(inputNomeContato.value);
            telefoneContato.push(inputTelefoneContato.value);
        
            let linha = `<tr>`;
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputTelefoneContato.value}</td>`;
            linha += `</tr>`;
        
            linhas += linha;
        }
    };

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

inputNomeContato.addEventListener('keyup', function(e){
    formEValido = validaNome(e.target.value);
    if (!formEValido){
        inputNomeContato.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else {
        inputNomeContato.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
