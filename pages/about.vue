<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate adipisci tempora sunt eos, mollitia asperiores velit est dicta!
       Praesentium ipsa earum soluta saepe temporibus minima, id voluptatum vero natus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate adipisci tempora sunt eos, mollitia asperiores velit est dicta!
       Praesentium ipsa earum soluta saepe temporibus minima, id voluptatum vero natus.</p>
       <div> {{ data }} </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/main')

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}

</style>