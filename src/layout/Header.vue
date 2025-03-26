<script>
import logo from "@/assets/ppiiium-logo.png";

export default {
  data() {
    return {
      logo
    };
  }
};
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50 flex justify-between flex-row-reverse md:grid md:grid-cols-5 py-2 px-8 md:px-12 md:py-2 bg-zinc-200 shadow-md bg-opacity-70 backdrop-blur-lg">
      <nav class="hidden md:block col-span-2 m-auto ">
        <ul class="flex text-xl gap-8">
          <li>
            <router-link to="/ppi-iium" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              PPI-IIUM
            </router-link>
          </li>
          <li>
            <router-link to="/pena-kita" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Pena Kita
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- Logo -->
      <router-link to="/" class="block cursor-pointer">
        <img :src="logo" alt="Logo" class="h-14 col-span-1 md:m-auto">
      </router-link>

      <!-- Navigation Menu -->
      <nav class="hidden md:block col-span-2 m-auto ">
        <ul class="flex text-xl gap-8">
          <li>
            <router-link to="/info-kuliah" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Info Kuliah
            </router-link>
          </li>
          <li>
            <router-link to="/kontak" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Kontak
            </router-link>
          </li>
        </ul>
      </nav>

      <button class="md:hidden" @click="$emit('toggleSidebar')"><i class="fa-solid fa-bars fa-2xl"></i></button>
    </header>
</template>
