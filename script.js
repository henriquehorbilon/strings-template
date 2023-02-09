
// PRÁTICA GUIADA 1, 2 E 3

// versão CONCATENAÇÃO

//const perguntaNome = prompt('Qual é o seu nome?')
//const perguntaCor = prompt('Qual é sua cor favorita?')
//const perguntaCitacao = prompt(`Qual sua citação favorita?`)
/*
function imprimeString(nome,cor,citacao){

    const string = 'A cor favorita de ' + nome + ' é ' + cor + '. \nA citação favorita é: "' + citacao + '".'
    console.log('Versão concatenada:', string)
}
*/
//imprimeString(perguntaNome,perguntaCor,perguntaCitacao)



// versão TEMPLATE STRING

/*
function imprimeStringTemplate(nome,cor){

    const nomeMaiusculo = nome.toUpperCase()

    const string = `
    Nome: ${nomeMaiusculo} 
    Cor favorita: ${cor}`

    const incluiLetraH = nome.includes('h')

    console.log('Versão com template string:', string)
    console.log(`Quantidade de caracteres no nome: ${nome.lengthJ}`)
    console.log(`Tem letra H dentro do nome? ${incluiLetraH}`)
}
 imprimeStringTemplate(perguntaNome,perguntaCor)
*/
// EXERCICIO FIXAÇÃO

const perguntaNome = prompt('Qual seu nome?')
const perguntaEmail = prompt('Qual seu e-mail?')

function imprimirMensagem (nomeUser,email){
    

    const frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nomeUser}
    Quantidade de caracteres no nome do User: ${nomeUser.length}`

    const novaFrase = frase.replaceAll('r','x')
    const possuiArroba = frase.includes('@')

    console.log(novaFrase)
    console.log(`O e-mail da pessoa possui @ ?: ${possuiArroba}`)
}
imprimirMensagem(perguntaNome,perguntaEmail)