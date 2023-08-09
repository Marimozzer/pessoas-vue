
import api from './api'

function getAll(){
    return new Promise((resolve,reject)=> {
        return api.get(`/pessoa`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function getAllByID(id){
    return new Promise((resolve,reject)=> {
        return api.get(`/pessoa/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function create(pessoa){
    return new Promise((resolve,reject)=> {
        return api.post(`/pessoa`,pessoa)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function update(pessoa){
    return new Promise((resolve, reject) => {
        return api.put(`/pessoa/${pessoa.id}`, pessoa)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function deletar(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/pessoa/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}


export default{
    getAll,
     getAllByID,
     create,
     update, 
     deletar
}