<script>
import Kabinet from "@/assets/Kabinet-Rangkasa.jpg";

export default {
  data() {
    return {
      Kabinet
    };
  }
};
</script>

<template>
    <section class="min-h-[50vh] flex justify-center items-center text-zinc-800">
        <div class="grid grid-row-2 lg:grid-cols-2 p-8 md:px-24 mt-16 gap-4">
            <div class="col-span-1 row-span-1 flex flex-col gap-5 my-auto">
                <div class="text-2xl md:text-4xl col-span-2 text-zinc-600 text-center lg:text-left"> 
                    <h1 class="text-2xl md:text-5xl"><b class="text-black">PPI IIUM.</b> 2024/2025</h1>
                    <h2>Kabinet Rangkasa</h2>
                </div>
                <p class="w-11/12 text-center lg:text-left mx-auto lg:mx-0 md:text-lg">
                    Kabinet Rangkasa melambangkan fondasi yang kokoh serta tujuan dan harapan bersama dalam mengembangkan potensi pelajar Indonesia melalui kolaborasi, komunikasi yang efektif, dan pendidikan sebagai pilar menuju kemajuan bersama.
                </p>
                <div class="flex gap-4 justify-center lg:justify-start">
                    <button>
                        <router-link to="/Kontak" class="text-zinc-900 text-lg bg-zinc-100 py-2 px-3 md:py-3 md:px-5 rounded-full shadow-lg inline-block hover:scale-105 transition-all duration-300 outline outline-zinc-900">Kunjungan</router-link>
                    </button>
                    <button>
                        <router-link to="/Kontak" class="text-zinc-100 text-lg bg-zinc-900 py-2 px-3 md:py-3 md:px-5 rounded-full shadow-lg inline-block hover:scale-105 transition-all duration-300 ">Tentang Kami</router-link>
                    </button>
                </div>
            </div>
            <img :src="Kabinet" alt="" class="rounded-2xl shadow-xl col-span-1 row-span-1">
        </div>
    </section>
</template>