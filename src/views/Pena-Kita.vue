<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const changeFilter = (filter) => {
  if (route.params.filter !== filter) {
    console.log(`Navigating to: /pena-kita/${filter}`);
    router.push(`/pena-kita/${filter}`);
  }
};
</script>

<template>
  <section class="mt-12 py-8 min-h-[50vh] flex flex-col gap-4 w-full">
      <div class="grid grid-cols-3 md:grid-cols-5 gap-2 mx-auto px-4">
        <button
          v-for="filter in ['all', 'pena-kastrat', 'seboga', 'ruang-cerita', 'ruanggaung']"
          :key="filter"
          @click="changeFilter(filter)"
          class="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full border border-gray-500 text-gray-800 hover:bg-gray-500 hover:text-white transition-all duration-300"
        >
          {{ filter.replace('-', ' ').toUpperCase() }}
        </button>
      </div>
      <router-view />
  </section>
</template>
