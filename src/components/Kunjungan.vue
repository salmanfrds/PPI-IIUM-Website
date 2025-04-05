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
    <section class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen mt-6 py-12 gap-10">
        <h2 class="text-center text-3xl font-bold">KUNJUNGI KAMI</h2>
        <div data-aos="fade-down" class="flex flex-col md:flex-row items-center justify-between w-2/3 gap-12">
            <a 
                href="https://drive.google.com/file/d/1wN1ItFR8gZ6o1ZHozKcBDph37znkLJz_/view" 
                target="_blank" 
                class="block aspect-auto shadow-lg">
                <img
                    src="../assets/Guidebook.jpg" 
                    alt="Guidebook IIUM"  
                    class="w-full h-full object-cover"
                >
            </a>
            <a 
                href="https://drive.google.com/file/d/1bgsW8hcwBRPP8ixB5wOXEkODHFsCcSDJ/view" 
                target="_blank" 
                class="block aspect-auto shadow-lg">
                <img 
                    src="../assets/Visitasi.jpg" 
                    alt="SOP Visitasi PPIM IIUM" 
                    class="w-full h-full object-cover"
                >
            </a>
        </div>
        <!-- Wrapper untuk Gform Visitasi -->
        <div class="flex justify-center mt-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2FyGGw613lYRKTddG2ipm6bQIobj2j-IHkFpS3RcyNae1Rg/viewform"
                class="block bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-800 hover:text-white text-xl px-4 py-2 rounded-lg text-center hover:scale-102 transition-all duration-300 shadow-2xl">
                Gform Visitasi
            </a>
        </div>
    </section>
</template>
