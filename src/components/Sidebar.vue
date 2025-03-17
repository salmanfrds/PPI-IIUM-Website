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
        class="fixed top-0 left-0 z-60 h-full flex flex-col gap-8 w-[60vw] bg-zinc-200 items-start md:hidden p-4 shadow-lg 
        transition-all duration-300 ease-in-out origin-left transform"
    >
        <button class="mt-1 ml-1 border p-1 rounded-full" @click="$emit('close')">
            <i class="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <nav class="text-lg">
            <ul class="flex flex-col gap-4">
                <li>
                    <a href="#"
                        class="relative text-zinc-700 hover:text-black transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        TENTANG PPI-IIUM
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="relative text-zinc-700 hover:text-black transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        PENA KITA
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="relative text-zinc-700 hover:text-black transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        INFO KULIAH
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="relative text-zinc-700 hover:text-black transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        KONTAK KAMI
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>