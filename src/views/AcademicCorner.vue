<script setup>
import { onMounted } from "vue";
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 250,
    once: true
  });
})

import irkhs from "../assets/irkhs.jpg";
import kict from "../assets/kict.jpg";
import celpad from "../assets/celpad.jpg";
import kaed from "../assets/kaed.jpg";
import koe from "../assets/koe.jpg";
import koed from "../assets/koed.jpg";
import aikol from "../assets/aikol.jpg";
import kenms from "../assets/kenms.jpg";
import hs from "../assets/hs.jpg";

const faculties = [
  { name: "Kulliyyah of Education", link: "https://drive.google.com/drive/folders/1AVfxnOUptJS-LRZwwIhusCTjJFpP4-ax", image: koed },
  { name: "Kulliyyah of Architecture & Environmental Design", link: "https://drive.google.com/drive/folders/1ogsv6w89tIYSeDYChvgxLsCYITlJu-gK", image: kaed },
  { name: "Ahmad Ibrahim Kulliyyah of Laws", link: "https://drive.google.com/drive/folders/1zi5WA1xanGT65GMhE8FsweRdjV4wjlnp", image: aikol },
  { name: "Kulliyyah of Islamic Reveal Knowledge", link: "https://drive.google.com/drive/folders/1zi5WA1xanGT65GMhE8FsweRdjV4wjlnp", image: irkhs },
  { name: "Kulliyyah of Human Science", link: "https://drive.google.com/drive/folders/1BB5vC9SoEzhIMBtSEOnzjSBrlaIGMsfw", image: hs },
  { name: "Kulliyyah of Engineering", link: "https://drive.google.com/drive/folders/1mEzbwDa9v76l5D9Z6MaGm_r1mAMEKh9j", image: koe },
  { name: "Kulliyyah of Economics & Management Sciences", link: "https://drive.google.com/drive/folders/1pjF44cZOtPWnkTG_MH2rnf8t-8t9rOba", image: kenms },
  { name: "Kulliyyah of Information & Communication Technology", link: "https://drive.google.com/drive/folders/1kJK9YkGLGqvw-IRCQcYSM_3ZX79-KPkU", image: kict },
  { name: "Centre for Languages & Pre-University Academic Development", link: "https://drive.google.com/drive/folders/1Q0ot1c0Ui7YdSrOMNqOHomAFnzWEYD1u", image: celpad }
];
</script>

<template>
  <section
    class="flex flex-col justify-center items-center min-h-[50vh] bg-gradient-to-br from-zinc-200 via-white to-zinc-50 pt-20 pb-10">
    <h2 class="text-4xl relative font-bold text-center text-gray-800 mb-12">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Academic Corner<br></span>
      <span class="text-xl md:text-2xl text-gray-600">PANDUAN, MATERI, & TIPS</span>
      <div
        class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-full">
      </div>
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="faculty in faculties" :key="faculty.name"
        class="bg-white shadow-md border border-zinc-200 text-zinc-800 rounded-md overflow-hidden flex flex-col items-center w-[45vw] md:w-[20vw]" data-aos="zoom-in">
        <!-- Faculty Image -->
        <div class="w-full aspect-[4/3] bg-cover bg-center rounded-sm"
          :style="{ backgroundImage: `url(${faculty.image})` }">
        </div>
        <div class="w-full flex flex-col justify-between h-full px-1">
          <h3 class="text-sm md:text-base text-center font-semibold text-gray-800 md:p-2">{{ faculty.name }}</h3>
          <!-- "See More" Button -->
          <a :href="faculty.link"
            class="text-sm text-gray-600 px-4 py-2 transition mx-auto mt-4 border-t border-gray-900" target="_blank">
            See More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>