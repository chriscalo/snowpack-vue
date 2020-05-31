<template>
  <div class="App">
    <header class="App-header">
      <img src="/logo.svg" class="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.vue</code> and save to reload.
      </p>
    </header>
    <p>
      <button @click="counter.decrement">−</button>
      <span class="counter">{{ counter.value }}</span>
      <button @click="counter.increment(2)">+</button>
      <button @click="counter.reset">Reset</button>
    </p>
    <a
      class="App-link"
      href="https://vuejs.org"
      target="_blank"
      rel="noopener noreferrer"
    >{{ message }}</a>
  </div>
</template>
 
<script>
  import { ref, reactive } from "vue";
  
  function useCounter(initialValue) {
    const counter = reactive({
      value: initialValue,
      increment,
      decrement,
      reset,
    });
    
    function increment() {
      counter.value += 1;
    }
    
    function decrement() {
      counter.value -= 1;
    }
    
    function reset() {
      counter.value = 0;
    }
    
    return counter;
  };
  
  export default {
    setup() {
      const counter = useCounter(0);
      
      setInterval(counter.increment, 1000);
      
      return {
        message: "Learn Vue",
        counter,
      };
    }
  };
  
  
</script>

<style lang="scss" scoped>
  $link-color: #00c185;
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
  
  .App-link {
    color: $link-color;
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
