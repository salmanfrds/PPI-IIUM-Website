<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({ isOpen: Boolean });

const sidebarClasses = computed(() => 
  props.isOpen 
    ? "opacity-100 pointer-events-auto scale-x-100" 
    : "opacity-0 pointer-events-none scale-x-10"
);
</script>

<template>
    <div
        :class="sidebarClasses"
        class="fixed top-0 left-0 z-60 h-full flex flex-col gap-8 w-[80vw] bg-zinc-200 items-start md:hidden p-4 shadow-lg 
        transition-all duration-300 ease-in-out origin-left transform"
    >
        <div class="flex gap-8 items-center mt-4 m-4">
            <button class="rounded-full" @click="$emit('close')">
                <i class="fa-solid fa-xmark fa-2xl"></i>
            </button>
            <h2 class="text-2xl">MENU</h2>
        </div>
        <nav class="text-xl w-full">
            <ul class="flex flex-col gap-6 w-5/6 mx-auto ">
                <li>
                    <router-link  to="/" @click="$emit('close')" class="w-full inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
                        HOME
                    </router-link>
                </li>
                <li>
                    <router-link to="/PPI-IIUM" @click="$emit('close')" class="w-full inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
                        Tentang Kami
                    </router-link>
                </li>
                <li>
                    <router-link to="/Pena-Kita" @click="$emit('close')" class="w-full inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Pena Kita
            </router-link>
                </li>
                <li>
                    <router-link to="/Info-Kuliah" @click="$emit('close')" class="w-full inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Info Kuliah
            </router-link>
                </li>
                <li>
                    <router-link to="/Kontak" @click="$emit('close')" class="w-full inline-block text-zinc-700 hover:text-black bg-white px-4 py-2 rounded-lg shadow-md hover:scale-107 transition-all duration-300 hover:rounded-xl hover:shadow-lg">
              Kontak
            </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>