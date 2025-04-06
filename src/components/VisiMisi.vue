<template>
  <section class="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 py-20 min-h-[50vh] lg:min-h-screen flex items-center">
    <div class="container mx-auto px-4">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-2">
          Visi & Misi
        </h1>
        <h4 class="text-xl md:text-2xl text-gray-600 font-medium">
          Perhimpunan Pelajar Indonesia IIUM
        </h4>
        <div class="w-16 h-1 bg-zinc-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Content Cards -->
      <div class="grid md:grid-cols-2 gap-10 md:px-12" data-aos="fade-up">
        
        <!-- Visi -->
        <div class="bg-white border border-zinc-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8">
          <h4 class="text-2xl font-bold text-zinc-700 mb-4 border-b pb-2">
            VISI
          </h4>
          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            {{ visiContent || 'Visi belum ditentukan.' }}
          </p>
        </div>

        <!-- Misi -->
        <div class="bg-white border border-zinc-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8" data-aos="fade-up" data-aos-delay="100">
          <h4 class="text-2xl font-bold text-zinc-700 mb-4 border-b pb-2">
            MISI
          </h4>
          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            {{ misiContent || 'Misi belum ditentukan.' }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
import AOS from 'aos'; // ✅ You need this
import 'aos/dist/aos.css';

export default {
    data() {
        return {
            visiContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.`,
            misiContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.`,
        };
    },
    mounted(){
      AOS.init({
        duration: 300,
        once: true
      });
    }
};
</script>
