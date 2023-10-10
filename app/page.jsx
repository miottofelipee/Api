"use client"
import React from 'react'
import carros from '../data/carros'
import carro from '../data/carro'
import { ListadeCarro } from '@/models/listadecarros';
import objcarro from '@/models/carro'
export default function Home() {
  const objcarro = new Carro('Foed', 'Verde', 2020, 'AAA-8924');
  const ListaCarro = new ListadeCarro();
  ListaCarro.add(objcarro);

  carros.map((carro) => {
    ListaCarro.add(new Carro(carro.marca, carro.cor, carro.ano, carro.placa,));
  })

  return(
    <div>
      {
        ListaCarro.carros.map((carro) => (
          <div key={carro.id}>
            <p>Marca: {carro.marca}</p>
            <p>Cor: {carro.cor}</p>
            <p>Ano: {carro.ano}</p>
            <p>Placa: {carro.placa}</p>
          </div>
        ))
      }
    </div>
  
  )
}


