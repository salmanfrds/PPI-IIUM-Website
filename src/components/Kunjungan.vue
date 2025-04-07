<script>
    import AOS from 'aos'; 
    import 'aos/dist/aos.css';// ✅ You need this

    export default{
        mounted(){
          AOS.init({
            duration: 300,
            once: true
          });
        }
    };
</script>
<template>
    <section class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen pt-20 pb-10 gap-12 px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-800 mt-2">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Kunjungan</span>
        </h2>
  
      <!-- Resource Cards -->
      <div
        data-aos="fade-up"
        class="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl"
      >
        <!-- Guidebook Card -->
        <a
          href="https://drive.google.com/file/d/1wN1ItFR8gZ6o1ZHozKcBDph37znkLJz_/view"
          target="_blank"
          class="group block w-full md:w-[45%] max-w-md bg-white border border-zinc-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            src="../assets/Guidebook.jpg"
            alt="Guidebook IIUM"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="p-4 text-center">
            <p class="font-semibold text-gray-700">Guidebook Mahasiswa Baru</p>
          </div>
        </a>
  
        <!-- SOP Visitasi Card -->
        <a
          href="https://drive.google.com/file/d/1bgsW8hcwBRPP8ixB5wOXEkODHFsCcSDJ/view"
          target="_blank"
          class="group block w-full md:w-[45%] max-w-md bg-white border border-zinc-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            src="../assets/Visitasi.jpg"
            alt="SOP Visitasi PPIM IIUM"
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div class="p-4 text-center">
            <p class="font-semibold text-gray-700">SOP Visitasi PPI IIUM</p>
          </div>
        </a>
      </div>
  
      <!-- Google Form Button -->
      <div data-aos="fade-up" class="flex justify-center mt-2">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc2FyGGw613lYRKTddG2ipm6bQIobj2j-IHkFpS3RcyNae1Rg/viewform"
          target="_blank"
          class="bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-800 hover:text-white text-lg font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-xl hover:scale-105"
        >
          Isi Form Visitasi
        </a>
      </div>
    </section>
</template>
  
