const botaoAlterarTema = document.getElementById("botao-altera-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtv = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtv) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});