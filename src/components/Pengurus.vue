<script setup>
    import BPH from "@/assets/BPH.png";
    import SEBOGA from "@/assets/seboga.png";
    import DANUS from "@/assets/danus.png";
    import KASTRAT from "@/assets/kastrat.png";
    import KESMA from "@/assets/kesma.png";
    import LITBANG from "@/assets/litbang.png";
    import MEDIFO from "@/assets/medifo.png";
    import PND from "@/assets/pnd.png";
    import 'aos/dist/aos.css';

    const pengurus = [
      { name: "BPH", image: BPH, link: "https://www.instagram.com/p/DEwcL_XS77K/?igsh=anRvMnFwY3Q5cDV0" },
      { name: "SEBOGA", image: SEBOGA, link: "https://www.instagram.com/p/DEwfL7oSXXd/?igsh=MWhoM25mczV4Mngyaw==" },
      { name: "DANUS", image: DANUS, link: "https://www.instagram.com/p/DEweiW3SvG8/?igsh=OTFqMjNjbWIwcndp" },
      { name: "KASTRAT", image: KASTRAT, link: "https://www.instagram.com/p/DEwaC86SAv5/?igsh=MXBiendkd2Z3b3lndA==" },
      { name: "KESMA", image: KESMA, link: "https://www.instagram.com/p/DEwaoxNyomW/?igsh=ZTY4ajNnN3VpZjQy" },
      { name: "LITBANG", image: LITBANG, link: "https://www.instagram.com/p/DEwfi_yyc4I/?igsh=MTk3bG81MG1rNG13eA==" },
      { name: "MEDIFO", image: MEDIFO, link: "https://www.instagram.com/p/DEwd8geSc4z/?igsh=MWFjdHVkMzRmaXlrYg==" },
      { name: "PND", image: PND, link: "https://www.instagram.com/p/DEwbFkfyumc/?igsh=dThhZ2U4aWZjNGRo" }
    ];
</script>

<template>
  <section class="bg-gradient-to-br from-zinc-200 via-white to-zinc-50 min-h-[50vh] lg:min-h-screen py-16 px-4 flex flex-col justify-center items-center">
    <!-- Heading -->
    <h2 class="text-gray-800 text-3xl md:text-4xl font-extrabold text-center mb-12 leading-relaxed">
      PENGURUS PPI-IIUM <br />
      <span class="text-xl md:text-2xl font-medium text-gray-600 tracking-wide">
        2024 / 2025
      </span>
    </h2>

    <!-- Cards Grid -->
    <div data-aos="fade-up" class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
      <a
        v-for="item in pengurus"
        :key="item.name"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="group transform transition duration-300 hover:scale-[1.03]"
      >
        <div class="relative aspect-square w-full bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-full object-cover"
          />

          <!-- Overlay on hover -->
          <div
            class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-2"
          >
            <div class="text-white">
              <h3 class="text-lg md:text-xl font-semibold">
                {{ item.name }}
              </h3>
              <p class="text-sm md:text-base text-gray-300">
                {{ item.role || "Anggota" }}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
