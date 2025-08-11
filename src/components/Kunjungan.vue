<script setup>
import AOS from 'aos'; 
import { onMounted } from 'vue';

onMounted(()=>{
  AOS.init({
    duration: 300,
    once: true
  });
})
</script>
<template>
  <section class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen pt-24 md:pt-20  pb-8 gap-12 px-4">
    <!-- Section Title -->
    <h2 class="text-4xl font-bold text-center text-gray-800 mt-2 relative">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Kunjungan</span>
      <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-full"></div>
    </h2>
  
    <!-- Resource Cards -->
    <div
      data-aos="fade-up"
      class="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl"
    >  
      <!-- SOP Visitasi Card -->
      <a
        href="https://drive.google.com/file/d/1bgsW8hcwBRPP8ixB5wOXEkODHFsCcSDJ/view"
        target="_blank"
        class="group block w-full md:w-[45%] max-w-md bg-white border border-zinc-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      >
        <div class="relative overflow-hidden h-[50vh]">
          <img
            src="../assets/Visitasi.jpg"
            alt="SOP Visitasi PPIM IIUM"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-4 text-center">
          <p class="font-semibold text-gray-700">SOP Visitasi PPI IIUM</p>
        </div>
      </a>

      <!-- Guidebook PPI-IIUM -->
      <a
        href="https://drive.google.com/file/d/1CwfXUyYdWe6eMCJ6-IZuUf0CHsX_itKl/view?usp=sharing"
        target="_blank"
        class="group block w-full md:w-[45%] max-w-md bg-white border border-zinc-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      >
        <div class="relative overflow-hidden h-[50vh]">
          <img
            src='../assets/guidebook.jpg'
            alt="Guidebook PPI-IIUM 2025"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-4 text-center">
          <p class="font-semibold text-gray-700">Guidebook PPI IIUM</p>
        </div>
      </a>
    </div>
  
    <!-- Google Form Button -->
    <div class="flex justify-center">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc2FyGGw613lYRKTddG2ipm6bQIobj2j-IHkFpS3RcyNae1Rg/viewform"
        target="_blank"
        class="group bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-800 hover:text-white text-lg font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-xl hover:scale-105 flex items-center"
      >
        <span>Isi Form Visitasi</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </section>
</template>