<script>
import Kabinet from "@/assets/Kabinet-Rangkasa.jpg";
import AOS from 'aos'; // ✅ You need this
import 'aos/dist/aos.css';
import bg from "../assets/iium.jpg"
import bgMobile from "../assets/iium-mobile.jpg";

export default {
  data() {
    return {
      Kabinet,
      bg,
      bgMobile
    };
  },
  computed: {
    // Dynamically set background based on window size
    currentBg() {
      return window.innerWidth < 768 ? this.bgMobile : this.bg;  // Assuming 768px as mobile size breakpoint
    }
  },
  mounted() {
    AOS.init({
      duration: 300,
      once: true
    });
    // You can also listen for window resize to update the background
    window.addEventListener('resize', this.updateBackground);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBackground);  // Clean up the event listener
  },
  methods: {
    updateBackground() {
      this.bg = window.innerWidth < 768 ? this.bgMobile : this.bg;
    }
  }
};
</script>

<template>
  <section
    :style="`background-image: url(${currentBg})`"
    class="min-h-[70vh]  bg-cover bg-center xl:min-h-screen flex flex-col justify-center items-center text-zinc-800 overflow-hidden pt-6 relative">
    <div class="absolute inset-0 bg-white/55 backdrop-brightness-90 z-0"></div>
    <!-- Background decorative elements -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-zinc-300/30 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2">
    </div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-zinc-300/20 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3">
    </div>

    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <!-- Content column -->
      <div class="flex flex-col gap-4 justify-center" data-aos="fade-right" data-aos-duration="1000">
        <!-- Logo/Badge - Optional small detail -->
        <div class="flex items-center gap-2 mb-2">
          <div class="bg-black h-1 w-12 rounded-full"></div>
          <span class="text-sm font-medium uppercase tracking-wider text-zinc-600">Periode 2024/2025</span>
        </div>

        <!-- Headings -->
        <div class="space-y-2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span class="text-black">PPI IIUM.</span>
            <span class="text-zinc-600 font-normal">2024/2025</span>
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-zinc-600 font-medium">Kabinet Rangkasa</h2>
        </div>

        <!-- Description with improved typography -->
        <p class="text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          Kabinet Rangkasa melambangkan fondasi yang kokoh serta tujuan dan harapan bersama dalam mengembangkan potensi
          pelajar Indonesia melalui <span class="text-black font-medium">kolaborasi</span>, <span
            class="text-black font-medium">komunikasi</span> yang efektif, dan <span
            class="text-black font-medium">pendidikan</span> sebagai pilar menuju kemajuan bersama.
        </p>

        <!-- Buttons with improved styling -->
        <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
          <router-link to="/Kontak"
            class="text-zinc-900 bg-white border-2 border-zinc-900 py-3 px-6 rounded-full shadow-md hover:shadow-lg inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-1">
            Kunjungan
            <i class="fa-solid fa-arrow-right-long text-sm"></i>
          </router-link>
          <router-link to="/Kontak"
            class="text-white bg-zinc-900 py-3 px-6 rounded-full shadow-md hover:shadow-xl inline-flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-1">
            Tentang Kami
            <i class="fa-solid fa-users text-sm"></i>
          </router-link>
        </div>

        <!-- Optional social proof or statistics -->
        <div class="flex gap-8 justify-center lg:justify-start mt-2 pt-4 border-t border-zinc-800">
          <div class="text-center">
            <p class="text-3xl font-bold">500+</p>
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
        <div
          class="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-800/5 rounded-2xl transform rotate-3 scale-95">
        </div>
        <img :src="Kabinet" alt="Kabinet Rangkasa PPI IIUM"
          class="rounded-2xl shadow-xl relative z-10 w-full max-w-lg lg:max-w-none object-cover transition-all duration-700 hover:shadow-2xl"
          loading="lazy" />
        <!-- Optional floating element -->
        <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg z-20">
          <p class="font-medium">Pelantikan Kabinet</p>
          <p class="text-sm text-zinc-600">Juni 2024</p>
        </div>
      </div>
    </div>
  </section>
</template>
