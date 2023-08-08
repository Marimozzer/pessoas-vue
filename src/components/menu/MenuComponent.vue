<template>
    <ul>
        <li>
            <router-link to="/dashboard">Dashboard</router-link> 
        </li>
        <li>
            <router-link to="/controle-de-pessoas">Pessoas</router-link> 
        </li>
        
        <li>
            <router-link to="/">Sair</router-link> 
        </li>
    </ul>
</template>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--first-color);
}
li{
    float: left;
}

li:first-child{
    margin-left: 40px;
}
li:last-child{
    float: right;
    margin-right: 10px;
}
li a {
    display: block;
    color: white;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
}
li a:hover{
    background-color: var(--second-color);
}

</style>