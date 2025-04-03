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
    <header class="fixed top-0 left-0 w-full z-50 flex justify-between flex-row-reverse xl:grid xl:grid-cols-5 py-2 px-8 md:px-12 md:py-2 bg-zinc-200 shadow-md bg-opacity-70 backdrop-blur-lg">
      <nav class="hidden xl:block col-span-2 m-auto ">
        <ul class="flex text-xl gap-8">
          <li>
            <router-link to="/" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              PPI-IIUM
            </router-link>
          </li>
          <li>
            <router-link to="/ppi-iium" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              About Us
            </router-link>
          </li>
          <li>
            <router-link to="/kontak" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Kontak
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- Logo -->
      <router-link to="/" class="block cursor-pointer">
        <img :src="logo" alt="Logo" class="h-14 xl:h-12 col-span-1 md:m-auto">
      </router-link>

      <!-- Navigation Menu -->
      <nav class="hidden xl:block col-span-2 m-auto ">
        <ul class="flex text-xl gap-8">
          <li>
            <router-link to="/info-kuliah" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Info Kuliah
            </router-link>
          </li>
          <li>
            <router-link to="/pena-kita" class="inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Pena Kita
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard" @click="$emit('close')"
              class="flex items-center gap-2 text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </router-link>
          </li>
        </ul>
      </nav>

      <button class="xl:hidden" @click="$emit('toggleSidebar')"><i class="fa-solid fa-bars fa-2xl"></i></button>
    </header>
</template>
