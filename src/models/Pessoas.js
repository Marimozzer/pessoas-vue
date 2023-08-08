export default class Pessoa{
    constructor(obj){
        obj = obj || {};
       
        // this.id = obj.id;
        // this.nome = obj.nome;
        // this.quantidadeEstoque = obj.quantidadeEstoque;
        // this.valor = obj.valor;
        // this.dataCadastro = obj.dataCadastro;

        this.id = obj.id;
        this.nomeCompleto = obj.nomeCompleto;
        this.sexo = obj.sexo;
        this.dtNasc = obj.dtNasc;
        this.CPF = obj.CPF;
        this.email = obj.email;
        this.celular = obj.celular;
        this.id_setor = obj.id_setor;
        this.visitante = obj.visitante;
        this.path_image = obj.path_image;

    }
        modeloValidoParaCadastro(){
            return!! this.nomeCompleto
        }

        modeloValidoParaAtualizar(){
            return!! (this.id && this.nomeCompleto)
        }

}

