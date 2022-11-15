

export function datam(dataok, data){
    let dataFormatadaok = (dataok.getFullYear() + "-" + ((dataok.getMonth() + 1)) + "-" + (dataok.getDate() ))
    console.log(data[0])
    console.log(dataFormatadaok)
    if ( data[0] === dataFormatadaok)
    return('datainversa')
else
    return('data-p');
}