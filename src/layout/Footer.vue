<script setup>
  import Logo from "@/assets/ppiiium-logo.png"
</script>

<template>
  <footer class="flex flex-col justify-center text-white gap-1 Footer bg-zinc-800">
    <div class="flex p-4 justify-center gap-4 border-b-2 border-zinc-200 w-1/2 md:w-1/3 mx-auto items-center">
        <a href="https://www.instagram.com/ppiiium"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a href="https://t.me/PusatInformasiMahasiswa"><i class="fa-brands fa-telegram fa-xl"></i></a>
        <a href="https://www.youtube.com/@newppiiium/videos"><i class="fa-brands fa-youtube fa-xl"></i></a>
        <a href="https://wa.me/60134298449"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
    </div>
    <nav class="grid grid-cols-2 lg:grid-cols-4 p-4 gap-2 text-center md:w-2/5 mx-auto">
        <router-link to="/tentang-kami" class="hover:text-zinc-400 transition-color duration-200">About Us</router-link>
        <router-link to="/kontak" class="hover:text-zinc-400 transition-color duration-200">Kontak</router-link> 
        <router-link to="/pena-kita" class="hover:text-zinc-400 transition-color duration-200">Pena Kita</router-link>
        <router-link to="/academic-corner" class="hover:text-zinc-400 transition-color duration-200">Academic</router-link>
    </nav>
    <div class="w-full"><img :src="Logo" alt="Logo" class="w-12 mx-auto"></div>
    <div class="flex flex-row justify-center p-4">
        <div class="flex flex-col gap-2 text-center">
            <a href="mailto:newppiiium@gmail.com"><b>newppiiium@gmail.com</b></a>
            <p class="text-sm">&copy; 2025 PPI-IIUM. All rights reserved.</p>
        </div>
    </div>
  </footer>
</template>
