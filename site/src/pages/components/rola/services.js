export function marcado(horasSelecionados,hora) {
    if (horasSelecionados.find(item => item.horario === hora))
        return true;
    else
        return false;
}