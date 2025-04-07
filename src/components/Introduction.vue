<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
      mounted(){
        AOS.init({
          duration: 300,
          once: true
        });
      }
    };    
</script>

<template>
  <section
    class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 rounded-2xl shadow-xl min-h-[50vh] xl:min-h-screen flex flex-col gap-8 pt-20 pb-10 px-6"
  >
    <!-- Banner Placeholder -->
    <div
      class="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 rounded-xl w-full md:w-3/4 aspect-[2/1] mx-auto flex items-center justify-center text-gray-600 text-xl font-medium tracking-wide"
      data-aos="fade-down"
    >
      Banner
    </div>

    <!-- Section Title -->
    <div
      class="text-gray-800 text-3xl md:text-4xl font-extrabold text-center w-full md:w-3/4 lg:mt-4 mx-auto"
    >
      Tentang PPI-IIUM
    </div>

    <!-- Divider -->
    <div class="w-20 h-1 bg-zinc-500 mx-auto rounded-full" data-aos="zoom-in"></div>

    <!-- Description Text -->
    <div
      class="text-gray-700 text-base md:text-lg leading-relaxed w-full md:w-3/4 mx-auto text-center md:text-justify"
      data-aos="fade-up"
    >
      Kabinet Rangkasa melambangkan fondasi yang kokoh serta tujuan dan harapan bersama dalam mengembangkan potensi pelajar Indonesia melalui , komunikasi yang efektif, dan pendidikan sebagai pilar menuju kemajuan bersama.
    </div>
  </section>
</template>
