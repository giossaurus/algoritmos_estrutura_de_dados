function reverseWords(s) {
    return s.split(' ') // Divide a string em palavras separadas por espaço
            .map(word => word.split('').reverse().join('')) // Reverte cada palavra
            .join(' '); // Junta as palavras novamente com espaço entre elas
}

// Exemplo de uso:
const input = "Let's take LeetCode contest";
const output = reverseWords(input);
console.log(output); // Saída: "s'teL ekat edoCteeL tsetnoc"