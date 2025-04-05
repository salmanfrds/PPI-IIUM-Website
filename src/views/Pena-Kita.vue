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
  <section class="py-20 min-h-[50vh] lg:min-h-screen flex flex-col gap-4 w-full bg-gradient-to-br from-zinc-200 via-white to-zinc-50">
    <router-link
      to="/dashboard"
      class="fixed z-50 w-14 h-14 top-36 lg:top-24 right-12 bg-zinc-200 border border-green-200 shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-green-200"
      aria-label="Write a post"
    >
      <i class="fa-solid fa-pen-nib text-green-600 text-2xl"></i>
    </router-link>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-2 mx-auto px-4">
      <button
        v-for="filter in ['all', 'pena-kastrat', 'seboga', 'ruang-cerita', 'ruanggaung']"
        :key="filter"
        @click="changeFilter(filter)"
        class="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full border bg-white border-zinc-500 text-zinc-800 hover:bg-zinc-500 hover:text-white transition-all duration-300"
      >
        {{ filter.replace('-', ' ').toUpperCase() }}
      </button>
    </div>
    <router-view />
  </section>
</template>
