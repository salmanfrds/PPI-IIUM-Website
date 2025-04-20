<template>
  <section class="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 py-20 min-h-[50vh] lg:min-h-screen flex items-center">
    <div class="container mx-auto px-4">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-2">
          Visi & Misi
        </h1>
        <h4 class="text-xl md:text-2xl text-gray-600 font-medium">
          Persatuan Pelajar Indonesia IIUM
        </h4>
        <div class="w-16 h-1 bg-zinc-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Content Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-12" data-aos="fade-up">
        
        <!-- Visi -->
        <div class="bg-white border border-zinc-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 col-span-1">
          <h4 class="text-2xl font-bold text-zinc-700 mb-4 border-b pb-2">
            VISI
          </h4>
          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            {{ visiContent || 'Visi belum ditentukan.' }}
          </p>
        </div>

        <!-- Misi -->
        <div class="bg-white border border-zinc-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 md:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <h4 class="text-2xl font-bold text-zinc-700 mb-4 border-b pb-2">
            MISI
          </h4>
          <ol class="text-base md:text-lg text-gray-700 leading-relaxed gap-2 list-decimal list-inside flex flex-col">
            <li v-for="(misi, index) in misiContent" :key="index">{{ misi || 'Misi belum ditentukan.' }}</li>
          </ol>
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
            visiContent: `Menjadikan PPI IIUM sebagai wadah pengembangan potensi pelajar Indonesia yang aktif dan kolaboratif dalam bidang pendidikan dan keorganisasian.`,
            misiContent: [
              'Menyelenggarakan program Pendidikan yang berfokus pada pengembangan keterampilan akademik dan kepemimpinan bagi pelajar Indonesia di IIUM.',
              'Membangun jaringan kolaborasi antara pelajar, alumni, dan organisasipendukung lainnya untuk meningkatkan dukungan akademik dan professional.',
              'Mengembangkan platfrom komunikasi yang efektif untuk mempererat hubungan antar warga PPI IIUM serta memfasilitasi penyampaian informasi dan ide.'
            ]
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
