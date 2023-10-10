"use client"
import { useState } from 'react'
import styles from './finances.module.css'

import Transacao from '../../models/Transacao'
import ListaTransacoes from '@/models/ListaTrasacoes'

import { FaPen, FaTrash } from 'react-icons/fa'

import DashCard from '.././../components/dashcard/DashCard.jsx'
import DashButton from '@/components/dashbutton/DashButton'
import Header from '@/components/header/Header'

const listaTransacoes = new ListaTransacoes();

function Finances() {
  // Inputs
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  // Edição
  const [flag, setFlag] = useState(0)
  const [editButton, setEditButton] = useState(false)

  //Dados da classe
  const [lista, setLista] = useState(listaTransacoes.getTodasTransacoes());
  const [saldo, setSaldo] = useState(listaTransacoes.saldo);
  const [receitas, setReceitas] = useState(listaTransacoes.receitas);
  const [despesas, setDespesas] = useState(listaTransacoes.despesas);


  const addReceita = () => {
    //console.log("Adicionou a receita")
    const transacao = new Transacao(description, value, "Receita");
    //console.log(transacao);

    listaTransacoes.adicionarTransacao(transacao);

    atualizarValores();
    setDescription('');
    setValue('');
  }

  const adddespesa = () => {
    //console.log("Adicionou a despesa")
    const transacao = new Transacao(description, value, "Despesa")
    //console.log(transacao);

    listaTransacoes.adicionarTransacao(transacao);

    atualizarValores();
    setDescription('');
    setValue('');
  }

  const atualizarValores = () => {
    setLista(listaTransacoes.getTodasTransacoes());
    setSaldo(listaTransacoes.saldo);
    setReceitas(listaTransacoes.receitas);
    setDespesas(listaTransacoes.despesas);
  }

  const exclude = (id) => {
    const transacao = listaTransacoes.getTodasTransacoes();

    if (transacao) {
      listaTransacoes.excluirTransacao(id);
      atualizarValores();
    }

    console.log("Deu certo");
  }

  const edit = (id) => {
    const transacao = listaTransacoes.getTransacaoPorId(id);

    if (transacao) {
      setDescription(transacao.descricao)
      setValue(transacao.valor)

      setFlag(id)
      setEditButton(true)
    }
  }

  const atualizar = () => {
    listaTransacoes.updateTransacao(flag, description, value)

    setDescription('')
    setValue('')

    atualizarValores()
    setEditButton(false)
    setFlag(0)
  }

  return (
    <>
      <Header nome={Felipe} email={fmiotto47gmail.com} cor={"#f1f5f9"}/>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>
            <div className={styles.description}>
              <input
                className={styles.inputdescription}
                value={description}
                type="text"
                name='description'
                placeholder='Descrição'
                onChange={(e) => setDescription(e.target.value)}
              />
              <input className={styles.inputdescription} value={value} type="number" name='description' placeholder='Valor (R$)' onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.type}>
              {
                editButton ? (
                  <button className={styles.buttonAtualizar} onClick={atualizar} >Atualizar</button>
                ) : (
                  <>
                    <DashButton title={"Receita"} cor={"#9fe0b1"} fn={addReceita}></DashButton>
                    <button className={styles.buttondespesa} onClick={adddespesa} >Despesa</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>
          <DashCard title={"Saldo"} value={saldo} color={"#9fc7e0"} />
          <div className={styles.cardReceitas}>
            <p className={styles.cardTitle}>Receitas</p>
            <p className={styles.cardValue}>R$ {receitas}</p>
          </div>
          <div className={styles.cardDespesas}>
            <p className={styles.cardTitle}>Despesas</p>
            <p className={styles.cardValue}>R$ {despesas}</p>
          </div>
        </div>

        <div className={styles.registros}>
          <div className={styles.registrosreceitas}>
            <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
            <div className={styles.registrosreceitaslist}>
              {
                lista.map((transacao, index) => (
                  transacao.tipo == "Receita" && (
                    <div key={transacao.id} className={styles.registrosreceitasitem}>
                      <p className={styles.registrosreceitasitemdescription}>{transacao.descricao}</p>
                      <p className={styles.registrosreceitasitemvalue}>R${transacao.valor}</p>

                      <div className={styles.actions}>
                        <button className={styles.actionsbutton} onClick={() => exclude(transacao.id)}>Excluir</button>
                        <button className={styles.actionsbutton} onClick={() => edit(transacao.id)}>Editar</button>
                      </div>
                    </div>
                  )
                ))
              }

            </div>
          </div>

          <div className={styles.registrosdespesas}>
            <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
            <div className={styles.registrosdespesaslist}>
              {
                lista.map((transacao, index) => (
                  transacao.tipo == "Despesa" && (
                    <div key={transacao.id} className={styles.registrosdespesasitem}>
                      <p className={styles.registrosreceitasitemdescription}>{transacao.descricao}</p>
                      <p className={styles.registrosreceitasitemvalue}>R${transacao.valor}</p>

                      <div className={styles.actions}>
                      <button className={styles.actionsbutton} onClick={() => exclude(transacao.id)}>Excluir</button>
                        <button className={styles.actionsbutton} onClick={() => edit(transacao.id)}>Editar</button>
                      </div>
                    </div>
                  )
                ))
              }


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finances
