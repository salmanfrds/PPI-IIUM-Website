<script setup>
    import BPH from "@/assets/BPH.png";
    import SEBOGA from "@/assets/seboga.png";
    import DANUS from "@/assets/danus.png";
    import KASTRAT from "@/assets/kastrat.png";
    import KESMA from "@/assets/kesma.png";
    import LITBANG from "@/assets/litbang.png";
    import MEDIFO from "@/assets/medifo.png";
    import PND from "@/assets/pnd.png";

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
  <section class="bg-gray-200 min-h-[50vh] py-6 px-4 flex flex-col gap-4 justify-center items-center">
    <h2 class="text-center text-gray-800 text-3xl font-bold">PENGURUS PPI-IIUM 2024/2025</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a v-for="item in pengurus" :key="item.name" :href="item.link">
        <div class="aspect-square w-[40vw] md:w-[20vw] bg-gray-900 text-white flex items-center justify-center rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-103">
          <img :src="item.image" class="w-11/12 rounded-md md:rounded-lg" :alt="item.name" />
        </div>
      </a>
    </div>
  </section>
</template>
