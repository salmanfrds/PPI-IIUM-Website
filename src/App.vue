<script setup>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import Sidebar from './layout/Sidebar.vue';
import { ref } from 'vue';

// Define state
const isSidebarOpen = ref(false); // Reactive state

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div>
    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
    <Header @toggleSidebar="toggleSidebar" />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
  .judson-bold {
    font-family: "Judson", serif;
    font-weight: 700;
    font-style: normal;
  }

  .judson-regular-italic {
    font-family: "Judson", serif;
    font-weight: 400;
    font-style: italic;
  }

  * {
    font-family: "Judson", serif;
    font-weight: 400;
    font-style: normal;
  }

</style>