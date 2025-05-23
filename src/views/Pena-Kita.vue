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
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-auto px-4">
      <button
        v-for="filter in ['all', 'pena-kastrat', 'seboga', 'liputan-khusus', 'litbang']"
        :key="filter"
        @click="changeFilter(filter)"
        class="h-11 md:h-14 px-2 text-xs md:text-base rounded-full border bg-white border-zinc-500 text-zinc-800 hover:bg-zinc-500 hover:text-white transition-all duration-300"
      >
        {{ filter.replace('-', ' ').toUpperCase() }}
      </button>
      <router-link
        to="/dashboard"
        class="group inline-flex items-center bg-white border border-green-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Write a post"
      >
        <div class="flex items-center justify-center h-full aspect-square bg-green-100 rounded-full text-green-600 border border-green-200 shadow-sm">
          <i class="fa-solid fa-pen-nib text-xl transition-all duration-300 group-hover:scale-110"></i>
        </div>
        <span class="font-medium ml-1 md:ml-2 text-green-600 transition-all duration-300 group-hover:text-green-700">Write</span>
      </router-link>
    </div>
    <router-view />
  </section>
</template>
