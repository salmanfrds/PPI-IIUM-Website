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
    <section class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 rounded-lg shadow-lg mih-h-[50vh] xl:min-h-screen flex flex-col gap-4 pt-24 pb-10">
        <div class="bg-gray-200 rounded-lg w-4/5 md:w-3/4 aspect-[2/1] mx-auto" data-aos="fade-down">
            Banner
        </div>
        <div class="text-gray-800 text-2xl md:text-3xl font-bold w-4/5 md:w-3/4 mx-auto">Tentang PPI-IIUM</div>
        <!-- Bagian teks -->
        <div class="text-gray-700 text-sm md:text-base w-4/5 md:w-3/4 mx-auto">Kabinet Rangkasa melambangkan fondasi yang kokoh serta tujuan dan harapan bersama dalam mengembangkan potensi pelajar Indonesia melalui kolaborasi, komunikasi yang efektif, dan pendidikan sebagai pilar menuju kemajuan bersama.</div>
    </section>
</template>