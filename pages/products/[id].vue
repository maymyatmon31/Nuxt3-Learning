<template>
  <div>
    <p>Proudct details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Iusto dolorem repellendus, a asperiores cum eum eos similique necessitatibus est facere libero earum voluptas quae eaque aperiam quaerat quis ea unde?</p>

  </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
  layout: 'products'
})

</script>

<style scoped>

</style>