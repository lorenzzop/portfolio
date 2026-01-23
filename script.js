function enviarForm(event) {
    event.peventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5551995538082';

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`//Template Strings (``): Usadas para interpolação de variáveis com ${}, tipo String.format() no java
    const mensagemFormatada = encodeURIComponent(texto) //esse método troca os espaços por %, para a mensagem poder ser enviada, jaq espaço nao é aceito em URL

    const url = `https://whatsa.me/${telefone}/?t=${mensagemFormatada}`

    window.open(url, '_blank') //vai abrir a url em uma pagina nova vazia
}