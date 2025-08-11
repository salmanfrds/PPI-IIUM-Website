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
    <section
        class="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 flex flex-col items-center justify-center min-h-[25vh] py-16 gap-10 px-4">
        <!-- Title -->
        <h2 class="text-4xl font-bold text-center text-gray-800 mt-2 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Social Media</span>
          <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-full"></div>
        </h2>

        <!-- Icons -->
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8" data-aos="zoom-in">
            <!-- Instagram -->
            <a href="https://www.instagram.com/ppiiium" target="_blank" aria-label="Instagram"
                class="group flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img src="../assets/Instagram.svg" alt="Instagram"
                    class="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@newppiiium/videos" target="_blank" aria-label="YouTube"
                class="group flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img src="../assets/Youtube.svg" alt="YouTube"
                    class="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
            </a>

            <!-- Telegram -->
            <a href="https://t.me/PusatInformasiMahasiswa" target="_blank" aria-label="Telegram"
                class="group flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img src="../assets/Telegram.svg" alt="Telegram"
                    class="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/60134298449" target="_blank" aria-label="WhatsApp"
                class="group flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img src="../assets/Whatsapp.svg" alt="WhatsApp"
                    class="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
            </a>
        </div>
    </section>
</template>