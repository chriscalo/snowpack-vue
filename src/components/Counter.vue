<template>
  <button @click="counter.decrement">−</button>
  <span class="counter">{{ format.number(counter.value) }}</span>
  <button @click="counter.increment">+</button>
  <button @click="counter.reset">Reset</button>
  <button @click="counter.value += 100">Jump 100</button>
</template>

<script>
  import format from "../format.js";
  import useCounter from "../use/counter.js";
  
  export default {
    setup() {
      const counter = useCounter(0);
      console.log(counter);
      
      setInterval(counter.increment, 1000);
      
      return {
        counter,
        format,
      };
    },
  };
</script>

<style lang="scss" scoped>
  
</style>
