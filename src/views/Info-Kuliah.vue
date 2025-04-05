<script>
import university from "@/assets/university.png";

export default {
  data() {
    return {
      faculties: [
        { name: "Kulliyyah of Education", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Kulliyyah of Architecture & Environmental Design", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Ahmad Ibrahim Kulliyyah of Laws", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Kulliyyah of Islamic Reveal Knowledge & Human Sciences", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Kulliyyah of Engineering", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Kulliyyah of Economics & Management Sciences", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Kulliyyah of Information & Communication Technology", link: "https://www.youtube.com/@OfficialIIUM", image: university },
        { name: "Centre for Languages & Pre-University Academic Development", link: "https://www.youtube.com/@OfficialIIUM", image: university }
      ]
    };
  }
};
</script>

<template>
  <section class="flex flex-col justify-center items-center min-h-[50vh] bg-gradient-to-br from-zinc-200 via-white to-zinc-50 mt-2 py-18">
    <h2 class="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-12">INFO KULIAH<br> <span class="text-xl md:text-2xl text-gray-600">PANDUAN, MATERI, & TIPS</span> </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="faculty in faculties" :key="faculty.name" class="bg-white shadow-md border border-zinc-200 text-zinc-800 rounded-md overflow-hidden flex flex-col items-center w-[45vw] md:w-[20vw]">
        <!-- Faculty Image -->
        <div class="w-full aspect-[4/3] bg-cover bg-center rounded-lg"
             :style="{ backgroundImage: `url(${faculty.image})` }">
        </div>
        <div class="w-full flex flex-col justify-between h-full px-1">
            <h3 class="text-sm md:text-base text-center font-semibold text-gray-800 md:p-2">{{ faculty.name }}</h3>
            <!-- "See More" Button -->
            <a :href="faculty.link" 
               class="text-sm text-gray-600 px-4 py-2 transition mx-auto mt-4 border-t border-gray-900"
               target="_blank"
            >
              See More
            </a>
        </div>
      </div>
    </div>
  </section>
</template>
