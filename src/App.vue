<template>
  <div id="app">
    <!-- This is where the routed components will render -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Medical Inventory'
};
</script>

<style>
button {
    padding: 11px 18px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #000000c5; 
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 10px;
}

button:hover {
    background-color: hsla(0, 0%, 3%, 0.349);
    border: 2px solid transparent;
    background-clip: padding-box;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    border-image: linear-gradient(to right, #ff6ec7, #4facfe) 1;
    transform: scale(1.05);
}
</style>

