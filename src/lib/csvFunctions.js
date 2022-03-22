// Responsável pela leitura de dados 
const fs = require('fs');
const csvparse = require('csv-parse/lib/sync');

// Le cada linha do arquivo csv como um objeto e armazena no array 'emails'
let emails = csvparse(fs.readFileSync('../files/accounts.csv', 'utf-8'), {
    columns: false,
    delimiter: ',',
    skip_empty_lines: true
});

//função para captar somente o email
function catchEmail(obj){
    return obj[5]
}

//adiciona toda a parte de email para o vetor
function addEmailToArray(){
    let emailList = []
    for(let i=0; i<2;i++){ // quantidade de emails que deve adicionar no array
        if(catchEmail(emails[i]).includes('@')) // só adiciona se tiver @ na string (email válido)
         emailList.push(catchEmail(emails[i]))
    }
    return emailList
}


module.exports = {
    addEmailToArray,
};