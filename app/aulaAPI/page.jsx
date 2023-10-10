'use client'
import React, { useEffect, useState } from 'react'
import conselhos from '@/data/ConselhoAula'
function page() {

    const[dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const conselhosFetch = async () =>{
            try{
                const dados = await conselhos();
                setDadosApi(dados);
            }catch(e){
                throw 0;
            }}
        conselhosFetch();
    },[])


  return (
    <div>
        {
            dadosApi ? (
                <p>{dadosApi.slip.advice}</p>
            ) : (
                <p>Carregando api</p>
            )
        }
    
    </div>
  )
}

export default page