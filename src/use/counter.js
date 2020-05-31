import { reactive } from "vue";

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
    console.log("reset");
    counter.value = 0;
  }
  
  return counter;
};

export default useCounter;
