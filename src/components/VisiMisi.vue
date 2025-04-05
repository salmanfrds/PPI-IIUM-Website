<template>
    <section class="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 py-16 min-h-[50vh] lg:min-h-screen flex items-center">
      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
            VISI MISI
          </h1>
          <h4 class="text-xl md:text-2xl text-gray-600 font-semibold">
            PPI IIUM
          </h4>
        </div>
  
        <!-- Visi Misi Content -->
        <div class="grid md:grid-cols-2 gap-8 px-4 md:px-12" data-aos="fade-down">
          <!-- Visi Card -->
          <div class="bg-white shadow-md border border-zinc-200 text-zinc-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h4 class="text-xl md:text-2xl font-bold mb-6 border-b-2 pb-3">
              VISI
            </h4>
            <p class= "text-sm md:text-base text-gray-700 leading-relaxed">
              {{ visiContent || 'Visi belum ditentukan.' }}
            </p>
          </div>
  
          <!-- Misi Card -->
          <div data-aos="fade-down" class="bg-white shadow-md border border-zinc-200 text-zinc-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h4 class="text-xl md:text-2xl font-bold mb-6 border-b-2 pb-3">
              MISI
            </h4>
            <p class="text-sm md:text-base text-gray-700 leading-relaxed">
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
            visiContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            misiContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
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
