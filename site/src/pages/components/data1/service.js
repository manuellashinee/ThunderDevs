import Storage from 'local-storage'

export function datam(dataok, data){

    console.log(Storage('ingresso'));
    console.log(data);

    if (Storage('ingresso') === data)
        return('datainversa')
    else 
        return('data-p');

//     let dataFormatadaok = (dataok.getFullYear() + "-" + ((dataok.getMonth() + 1)) + "-" + (dataok.getDate() ))
//     console.log(data)
//     console.log(dataFormatadaok)
//     if ( data === dataFormatadaok)
//     return('datainversa')
// else
//     return('data-p');
}