<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({ isOpen: Boolean });

const sidebarClasses = computed(() =>
    props.isOpen
        ? "translate-x-0"
        : "-translate-x-full"
);
</script>

<template>
    <div :class="sidebarClasses" class="transform transition-transform duration-300 ease-in-out bg-gradient-to-b p-6 h-full min-h-screen shadow-xl fixed top-0 left-0 z-60 flex flex-col gap-8 w-[70vw] md:w-1/2 bg-zinc-900 items-start xl:hidden text-zinc-100">
        <nav class="w-full">
            <div class="flex gap-8 items-center mt-4 m-4">
                <button class="rounded-full mb-6" @click="$emit('close')">
                    <i class="fa-solid fa-xmark fa-2xl"></i>
                </button>
                <div class="mb-8">
                    <h1 class="text-2xl font-bold tracking-wider">PPI-IIUM</h1>
                    <div class="h-1 w-20 bg-zinc-100 mt-2 rounded-full"></div>
                </div>
            </div>

            <ul class="flex flex-col gap-3">
                <li class="group">
                    <router-link to="/" @click="$emit('close')"
                        class="flex items-center p-3 rounded-lg transition-all duration-300 hover:pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        HOME
                    </router-link>
                </li>
                <li class="group">
                    <router-link to="/PPI-IIUM" @click="$emit('close')"
                        class="flex items-center p-3 rounded-lg transition-all duration-300 hover:pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Tentang Kami
                    </router-link>
                </li>
                <li class="group">
                    <router-link to="/Pena-Kita" @click="$emit('close')"
                        class="flex items-center p-3 rounded-lg transition-all duration-300 hover:pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Pena Kita
                    </router-link>
                </li>
                <li class="group">
                    <router-link to="/Academic Corner" @click="$emit('close')"
                        class="flex items-center p-3 rounded-lg transition-all duration-300 hover:pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Academic Corner
                    </router-link>
                </li>
                <li class="group">
                    <router-link to="/Kontak" @click="$emit('close')"
                        class="flex items-center p-3 rounded-lg transition-all duration-300 hover:pl-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Kontak
                    </router-link>
                </li>
                <li class="mt-6 group">
                    <router-link to="/dashboard" @click="$emit('close')"
                        class="flex items-center p-3 bg-zinc-400 text-zinc-900 font-medium rounded-lg transition-all duration-300 hover:shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login
                    </router-link>
                </li>
            </ul>

            <div class="mt-12 pt-6 border-t">
                <p class="text-sm mb-4">Persatuan Pelajar Indonesia</p>
                <div class="flex space-x-4 text-zinc-00">
                    <!-- Instagram -->
                    <a href="#" class="transition-colors duration-300 hover:text-pink-500">
                        <i class="fab fa-instagram text-lg"></i>
                    </a>

                    <!-- YouTube -->
                    <a href="#" class="transition-colors duration-300 hover:text-red-600">
                        <i class="fab fa-youtube text-lg"></i>
                    </a>

                    <!-- Telegram -->
                    <a href="#" class="transition-colors duration-300 hover:text-blue-500">
                        <i class="fab fa-telegram text-lg"></i>
                    </a>

                    <!-- WhatsApp -->
                    <a href="#" class="transition-colors duration-300 hover:text-green-500">
                        <i class="fab fa-whatsapp text-lg"></i>
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>