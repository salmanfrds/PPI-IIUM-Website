<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import AOS from 'aos';

// Vue Router instances
const route = useRoute();
const router = useRouter();

// Define the filters in the script for cleaner code
const filters = ['all', 'pena-kastrat', 'seboga', 'liputan-khusus', 'litbang'];
const activeFilter = ref("all")

onMounted(()=>{
  AOS.init({
    duration: 300,
    once: true
  });
})

// This function navigates to the new filter route
const changeFilter = (filter) => {
  // Prevent navigation if the filter is already active
  if (route.params.filter === filter) {
    return;
  }

  if (activeFilter.value !== filter) {
    activeFilter.value === filter;
    console.log(`active filter now is ${filter}`)
  }

  // Navigate to the base path for 'all', or the specific filter path
  const newPath = (filter === "all") ? `/pena-kita/` : `/pena-kita/${filter}`;
  console.log(`navigate to ${newPath}`)
  router.push(newPath);
};
</script>

<template>
  <section
    class="py-20 min-h-[50vh] lg:min-h-screen flex flex-col items-center gap-12 w-full bg-gradient-to-br from-zinc-100 via-white to-zinc-50">
    <!-- Filter Controls Container -->
    <div
      data-aos="fade-down"
      class="flex flex-wrap justify-center items-center gap-2 md:gap-3 p-2 rounded-md md:rounded-lg bg-white border border-zinc-200 shadow-sm max-w-5/6">

      <!-- Filter Buttons -->
      <button v-for="filter in filters" :key="filter" @click="changeFilter(filter)" class="
        px-2 md:px-6 py-1 md:py-2 text-sm md:text-base font-semibold rounded-md md:rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
        <!-- Capitalize and format the filter name for display -->
        {{ filter.replace('-', ' ').toUpperCase() }}
      </button>

      <!-- "Write a Post" Button -->
      <router-link to="/dashboard"
        class="hidden group md:flex items-center justify-center h-10 w-10 md:h-11 md:w-11 bg-zinc-700 text-white rounded-full shadow-lg hover:bg-zinc-800 hover:shadow-xl transition-all duration-300"
        aria-label="Write a post">
        <i class="fa-solid fa-pen-nib text-lg md:text-xl transition-transform duration-300 group-hover:scale-110"></i>
      </router-link>
    </div>

    <!-- The content for the selected filter will be rendered here -->
    <router-view />
  </section>
</template>
