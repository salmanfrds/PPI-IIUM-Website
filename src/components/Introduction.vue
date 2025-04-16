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
  class="relative w-full md:w-3/4 aspect-[2/1] mx-auto flex items-center justify-center p-2"
  data-aos="fade-down"
>
  <!-- Decorative rounded background -->
  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-lg"></div>

  <!-- Actual image with rounded corners -->
  <img
    src="../assets/anggota.jpg"
    alt="Anggota"
    class="relative rounded-xl w-full h-full object-cover shadow-md"
  />
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
