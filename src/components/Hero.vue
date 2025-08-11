<script setup>
import AOS from 'aos';
import { onMounted, ref, onUnmounted } from "vue";

import Kabinet from "../assets/Kabinet-Rangkasa.jpg";
import bg from "../assets/iium-copy.jpg"
import bgMobile from "../assets/iium-mobile-copy.jpg";
import Interim from "../assets/Interim.jpg"
import Kerja from "../assets/Rapat-kerja.jpg"

// updated by comments

const gallery = ref([
    {
        title: "Rapat Interim Pengurus IIUM",
        tanggal: "11 Januari 2025",
        img: Interim,
    },
    {
        title: "Rapat Kerja Pengurus",
        tanggal: "31 Mei 2025",
        img: Kerja,
    },
    {
        title: "Pelantikan Kabinet",
        tanggal: "1 Januari 2024",
        img: Kabinet,
    },
]);

const activeBackground = ref('');
const activeGalleryIndex = ref(0);
const activeGallery = ref(gallery.value[activeGalleryIndex.value]);
const galleryTimer = ref(null);

const updateBackground = () => {
  activeBackground.value = window.innerWidth < 768 ? bgMobile : bg;
}

const nextGallery = () => {
  activeGalleryIndex.value = (activeGalleryIndex.value + 1) % gallery.value.length;
  activeGallery.value = gallery.value[activeGalleryIndex.value];
}

const startGalleryTimer = () => {
  if (galleryTimer.value) clearInterval(galleryTimer.value);
  galleryTimer.value = setInterval(nextGallery, 15000);
}

onMounted(() => {
  AOS.init({
    duration: 300,
    once: true
  });

  updateBackground();
  window.addEventListener('resize', updateBackground);

  startGalleryTimer();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateBackground);
  if (galleryTimer.value) clearInterval(galleryTimer.value);
});
</script>

<template>
  <section aria-label="Kabinet Rangkasa PPI-IIUM" :style="`background-image: url(${activeBackground})`"
    class="min-h-[70vh]  bg-cover bg-center xl:min-h-screen flex flex-col justify-center items-center text-zinc-800 overflow-hidden pt-6 relative">
    <div class="absolute inset-0 bg-zinc-100/80 backdrop-brightness-110 z-0"></div>
    <!-- Background decorative elements -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-zinc-300/30 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2">
    </div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-zinc-300/20 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3">
    </div>
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <!-- Content column -->
      <div class="flex flex-col gap-3 justify-center" data-aos="fade-right" data-aos-duration="1000">
        <!-- Logo/Badge - Optional small detail -->
        <div class="flex items-center gap-2 mb-2">
          <div class="bg-black h-1 w-12 rounded-full"></div>
          <span class="text-sm font-medium uppercase tracking-wider text-zinc-600">Periode 2024/2025</span>
        </div>

        <!-- Headings -->
        <div class="space-y-2 text-center lg:text-left">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <span class="text-black">PPI IIUM </span>
            <span class="text-zinc-600 font-normal">2024/2025</span>
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-zinc-600 font-medium">Kabinet Rangkasa</h2>
        </div>

        <!-- Description with improved typography -->
        <p class="text-black leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          Kabinet Rangkasa mencerminkan pondasi yang kuat dan tujuan bersama dalam mengembangkan potensi pelajar
          Indonesia di IIUM melalui pendidikan, kolaborasi, dan komunikasi yang efektif. Nama Rangkasa sendiri
          melambangkan struktur yang kokoh dan kesatuan visi dalam mendukung setiap langkah menuju kemajuan bersama,
          memastikan bahwa setiap individu dapat berkembang secara optimal dalam lingkungan yang mendorong
          sinergi dan inovasi.
        </p>

        <!-- Buttons with improved styling -->
        <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
          <router-link to="/Kontak"
            class="text-zinc-900 bg-white border-2 border-zinc-900 py-3 px-6 rounded-full shadow-md hover:shadow-lg inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-1">
            Kontak
            <i class="fa-solid fa-arrow-right-long text-sm"></i>
          </router-link>
          <router-link to="/tentang-kami"
            class="text-white bg-zinc-900 py-3 px-6 rounded-full shadow-md hover:shadow-xl inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-1">
            Tentang Kami
            <i class="fa-solid fa-users text-sm"></i>
          </router-link>
        </div>

        <!-- Optional social proof or statistics -->
        <div class="flex gap-8 justify-center lg:justify-start mt-2 pt-4 border-t border-zinc-800">
          <div class="text-center">
            <p class="text-3xl font-bold">300+</p>
            <p class="text-sm text-zinc-600">Anggota</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">20+</p>
            <p class="text-sm text-zinc-600">Program</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">10+</p>
            <p class="text-sm text-zinc-600">Kolaborasi</p>
          </div>
        </div>
      </div>

      <!-- Image column with improved presentation -->
      <div class="relative flex items-center justify-center lg:justify-end" data-aos="fade-left"
        data-aos-duration="1000" data-aos-delay="300">
        <img :src="activeGallery.img" alt="Kabinet Rangkasa PPI IIUM"
          class="mb-4 rounded-2xl shadow-xl relative z-10 w-full max-w-lg lg:max-w-none object-cover transition-all duration-700 hover:shadow-2xl"
          loading="lazy" />

        <!-- Optional floating element -->
        <div class="absolute bottom-8 left-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg z-20">
          <p class="font-medium"> {{activeGallery.title}}</p>
          <p class="text-sm text-zinc-600">{{activeGallery.tanggal}}</p>
        </div>

        <div class="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20">
          <p class="text-sm text-zinc-600 font-medium">{{ activeGalleryIndex + 1 }} / {{ gallery.length }}</p>
        </div>

        <button
          class="absolute bottom-12 right-2 bg-zinc-900 hover:bg-zinc-900 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 z-20 hover:-translate-y-1"
          @click="nextGallery" aria-label="Next gallery item">
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  </section>
</template>