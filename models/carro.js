class ObjCarro {
    constructor(marca, cor, ano, placa) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.placa = placa;  // atributos privados não podem ser acessados fora do objeto
        this.id = this.getId();

    }
    getId(){
        return Math.random(Math.floor() * 1000)
    }

}