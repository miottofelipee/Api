export class ListadeCarro {
    constructor(){
        this.carros =[];
    }

    add(carro){
        this.carros.push(carro)
    }

    get(){
        return this.carros
    }
}