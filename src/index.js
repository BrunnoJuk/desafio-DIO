// Definindo o nome e a experiência (XP) do herói
let nomeHeroi = "Zelda";
let experiencia = 0;  // Você pode alterar o valor da experiência para testar diferentes níveis

// Variável para armazenar o nível do herói
let nivel;
let mensagem;

// Estrutura de decisão para classificar o nível do herói baseado na experiência
if (experiencia < 0) {
    mensagem = "Erro: XP inválido. O valor de XP não pode ser negativo.";
} else if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1000 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
} else {
    mensagem = "Erro: XP inválido.";
}

// Exibindo a mensagem com o nível do herói ou a mensagem de erro
if (mensagem) {
    console.log(mensagem);
} else {
    console.log("Heroi: "+ nomeHeroi + " / " + "XP: " + experiencia + ", está no nível: " + nivel);
}
