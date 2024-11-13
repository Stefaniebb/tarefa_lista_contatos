document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    const tdTelefone = document.createElement('td');
    tdTelefone.textContent = telefone;

    novaLinha.appendChild(tdNome);
    novaLinha.appendChild(tdTelefone);

    document.getElementById('contatos-lista').appendChild(novaLinha);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});