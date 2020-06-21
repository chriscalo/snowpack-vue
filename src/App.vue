<template>
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.vue</code> and save to reload.
    </p>
  </header>
  <Counter/>
</template>
 
<script>
  import Counter from "./components/Counter.vue";
  
  console.log(Counter)
  
  export default {
    components: {
      Counter,
    },
  };
</script>

<style lang="scss" scoped>
  $grid-unit: 8px;
  
  .App-header {
    background-color: #f9f6f6;
    padding: 4 * $grid-unit;
    color: #32485f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
    margin-bottom: 1rem;
    animation: App-logo-pulse infinite 1.6s ease-in-out alternate;
  }
  
  .counter {
    padding: $grid-unit;
  }
  
  @keyframes App-logo-pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>
