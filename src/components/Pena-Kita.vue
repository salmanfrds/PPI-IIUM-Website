<script setup>
</script>

<template>
    <section class="mt-16 py-8 min-h-[50vh] flex flex-col gap-4 w-full">
        <div class="flex gap-2 mx-auto">
            <button
              v-for="filter in ['all', 'pena-kastrat', 'seboga', 'cerita kami', 'ruanggaung']"
              :key="filter"
              @click="changeFilter(filter)"
              class="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
              :class="{ 'bg-blue-500 text-white': activeFilter === filter }"
            >
              {{ filter.replace('-', ' ').toUpperCase() }}
            </button>
        </div>
        <router-view />
    </section>
</template>

<script>
    export default {
      computed: {
        activeFilter() {
          return this.$route.params.filter || 'all';
        },
      },
      methods: {
        changeFilter(filter) {
          this.$router.push(`/pena-kita/${filter}`);
        },
      },
    };
</script>
