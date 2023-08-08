
<template>
  <button @click="callback">{{ value }}</button>
</template>

<script>
export default{
name: 'ButtonComponent',
props:{
    value: { type: String, require },
    callback: {type: Function, default: () => {}}
}
}
</script>

<style scoped>
button{
    width: 100%;
    background-color: var(--first-color);
    color: white;
    padding: 14px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

}

button:hover{
    background-color: var(--second-color);
}

</style>