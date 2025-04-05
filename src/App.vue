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

  * {
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

</style>