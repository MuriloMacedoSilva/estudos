let texto = "      aprendendo javascript     ";
console.log(texto.trim()); //limpa os espaços vazios em uma string

let animal = "elefante";
console.log(animal.charAt(3));  // só exibe o caractere de numero selecionado
console.log(animal.includes("lef")); // verifica se há "lef" no let, caso tenha exibe true

let novotexto = texto.replace("javascript", "java");
console.log(novotexto.trim()) // saida: "aprendendo java" substitui uma string
