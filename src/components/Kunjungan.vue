<script setup></script>
<template>
    <section class="bg-gray-100 flex flex-col items-center justify-center min-h-[50vh] mt-12 py-8 gap-10">
        <h2 class="text-center text-3xl font-bold">OUR SOCIAL MEDIA</h2>
        <div class="flex justify-center gap-2 md:gap-8">
            <!-- Instagram -->
            <a href="#" class="flex items-center justify-center p-2 shadow-2xl rounded-md">
                <img class="w-12 h-12" src="../assets/Instagram.svg" alt="">
            </a>
            <!-- YouTube -->
            <a href="#" class="flex items-center justify-center p-2 shadow-2xl rounded-md">
                <img class="w-12 h-12" src="../assets/Youtube.svg" alt="">
            </a>
            <!-- Telegram -->
            <a href="https://t.me/PusatInformasiMahasiswa" class="flex items-center justify-center p-2 shadow-2xl rounded-md">
                <img class="w-12 h-12" src="../assets/Telegram.svg" alt="">
            </a>
            <!-- WhatsApp -->
            <a href="#" class="flex items-center justify-center p-2 shadow-2xl rounded-md">
                <img class="w-12 h-12" src="../assets/Whatsapp.svg" alt="">
            </a>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between w-2/3 gap-12">
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
        <div class="flex justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2FyGGw613lYRKTddG2ipm6bQIobj2j-IHkFpS3RcyNae1Rg/viewform"
                class="block bg-white text-xl px-4 py-2 rounded-lg text-center hover:scale-102 transition-all duration-300 shadow-2xl">
                Gform Visitasi
            </a>
        </div>
    </section>
</template>
