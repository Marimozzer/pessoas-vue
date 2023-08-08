<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">{{modoCadastro ? "Adicionar" : "Editar" }} Pessoa </h1>
                <hr/>
                <br>
            </div>
        </div>
    <div class="row">
        <div class="col-sm-2">
            <div class="form-group">
                <label for="id">ID</label>
                <input id="id" type="text" v-model="pessoa.id" disabled class="form-control">
                </div>
                 </div>
                 <br>
                 <div class="col-sm-10">
                     <div class="form-group">
                     <label for="nomeCompleto">Nome Completo</label>
                     <input id="nomeCompleto" v-model="pessoa.nomeCompleto" type="text" class="form-control">
                </div>
             </div>
                 <div class="col-sm-2">
                    <div class="form-group">
                <label for="sexo">Sexo</label>
                <input id="sexo" type="text" v-model="pessoa.sexo" class="form-control">
            </div>
             </div>
                <div class="col-sm-5">
                <div class="form-group">
                <label for="dtNasc">Data de Nascimento</label>
                <input id="dtNasc" type="date" v-model="pessoa.dtNasc" class="form-control">
                 </div>
               </div>
             <div class="col-sm-5">
                <div class="form-group">
                <label for="CPF">CPF</label>
                <input id="CPF" type="text" v-model="pessoa.CPF" class="form-control">
                  </div>
                    </div>
                    <div class="col-sm-10">
                <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="pessoa.email" class="form-control">
            </div>
                    </div>
                    <div class="col-sm-5">
                <div class="form-group">
                <label for="celular">Celular</label>
                <input id="celular" type="tel" v-model="pessoa.celular" class="form-control">
            </div>
                    </div>
                <div class="col-sm-2">
                <div class="form-group">
                <label for="id_setor">ID Setor</label>
                <input id="id_setor" type="number" v-model="pessoa.id_setor" class="form-control">
            </div>
            
                    </div>
                <div class="col-sm-2">
                <div class="form-group">
                <label for="visitante">Visitante</label>
                <input id="visitante" type="number" v-model="pessoa.visitante" class="form-control">
            </div>
                    </div>
                <div class="col-sm-10">
                <div class="form-group">
                <label for="path_image">Path Image</label>
                <input id="path_image" type="text" v-model="pessoa.path_image" class="form-control">
                  <br>
            </div>
                </div>
                    </div>  

                <div class="row">

                </div>
                <div class="row">
                     <div class="col-sm-12">
                        <hr>
                       <h1>
                        {{ pessoa }}
                       </h1> 
                        <br>
                        
                    </div>
                    <div class="col-sm-12">
                        <!-- <h1>check {{ continuarAdicionando }}</h1> -->
                        <div v-show="modoCadastro" class="form-check-inline">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" v-model="continuarAdicionando">
                                Continuar adicionando
                            </label>
                        </div>

                        <button @click="cancelar"  class="btn btn-default float-right">Cancelar</button>
                        <button @click="salvarPessoa" class="btn btn-primary float-right mr-2">Salvar</button>
                    </div>
                        </div>
                            </div>
    
        </template>

<script>
import Pessoa from '@/models/Pessoas'
import pessoaService from '@/services/pessoa-service'
import conversorDeData from '@/utils/conversor-data'

export default {
    name:"PessoaComponent",
    data(){
        return {
            pessoa: new Pessoa(),
            modoCadastro: true,
            continuarAdicionando: false
        }
    }, 
    mounted(){
        let id=this.$route.params.id;
        if(!id)
        
            return;
        
        this.modoCadastro = false;
        this.obterPessoaPorId(id);
        //alert(this.$route.params.id)
    },
    methods:{
        obterPessoaPorId(id)
        {
            pessoaService.getAllByID(id)
            .then(response => {
                this.pessoa = new Pessoa(response.data);
            })
            .catch(error =>{
                console.log(error)
            })
        },
        cadastrarPessoa(){

            if(!this.pessoa.modeloValidoParaCadastro()){
                alert("O nome completo é obrigatório para o cadastro.");
                return;
            }

            this.pessoa.dtNasc = 
                conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.pessoa.dtNasc);
        
            pessoaService.create(this.pessoa)
            .then(() => {
                alert("Pessoa cadastrado com sucesso!");
                this.pessoa = new Pessoa();

                if(!this.continuarAdicionando){
                    this.$router.push({name: "ControleDePessoas"})
                }
            })
            .catch(error =>{
                console.log(error);
            });
        },

        salvarPessoa(){

            (this.modoCadastro) ? this.cadastrarPessoa() : this.atualizarPessoa();
        },
        atualizarPessoa(){
            if(!this.pessoa.modeloValidoParaCadastro())
           {
            alert("O nome completo da pessoa é obrigatorio para cadastro")
            return;
           }

           this.pessoa.dtNasc = 
                conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.pessoa.dtNasc);


           pessoaService.update(this.pessoa)
           .then(() => {
            alert("Pessoa atualizada com sucesso!");
            this.$router.push({name: "ControleDePessoas"});

        })
        .catch(error =>{
            console.log(error);
        });
        },

        cancelar(){
            this.pessoa = new Pessoa();
            this.$router.push({name: "ControleDePessoas"})
        }
    }
}
</script>

<style scoped>

</style>
