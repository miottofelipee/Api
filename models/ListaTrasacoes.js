export default class ListaTransacoes {
    constructor(){
        this.trancacoes = [];
        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;
    }

    adicionarTransacao(transacao){
        this.trancacoes.push(transacao);

        this.atualizarValores();
        
    }

    getTodasTransacoes() {
        return this.trancacoes;
    }

    getTransacaoPorId(id){
        return this.trancacoes.find(transacao => transacao.id == id);
    }

    excluirTransacao(id){
        const listaTransacoes = (this.trancacoes = this.trancacoes.filter(
            (transacao) => transacao.id != id
        ));

        

        this.atualizarValores();

        return listaTransacoes;
    }

    updateTransacao(id, descricao, valor) {
        const transacao = this.getTransacaoPorId(id);

        transacao.descricao = descricao;
        transacao.valor = valor;

        this.atualizarValores();

        return transacao;
    }

    atualizarValores(){
        this.saldo = 0;
        this.receitas = 0;
        this.despesas= 0;

        this.trancacoes.map(transacao => {
            if (transacao.tipo == "Receita"){
                this.receitas = Number(transacao.valor) + Number(this.receitas);
            }else{
                this.despesas = Number(transacao.valor) + Number(this.despesas);
            }
        });

        this.saldo = this.receitas - this.despesas;
    }
}