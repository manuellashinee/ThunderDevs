import FilmeD from "../../components/filmed";
import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import { buscarFilmePorId } from "../../../api/filmeapi";


export default function FilmeDetalhe(){
    const [filme, setFilme]= useState([]);
    const {idParam} = useParams();

    async function carregarFilme(){
        const [resposta] = await buscarFilmePorId(Number(idParam));
        setFilme(resposta);
    }


    useEffect(() => {
        carregarFilme();
      }, [])

    return(
        <section className='filme-detalhes'>
            <FilmeD  item={filme} />
        </section>
    );
}