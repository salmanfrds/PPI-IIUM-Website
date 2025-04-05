<template>
    <section class="py-16 container mx-auto bg-gradient-to-b from-white to-zinc-100 mt-8">
        <!-- Loading State -->
        <div v-if="loading" class="flex flex-col items-center justify-center min-h-[50vh]">
            <svg class="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
            <p class="text-gray-600 font-medium">Loading article...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="errorMessage"
            class="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500 mr-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p class="text-red-700 font-medium text-lg">{{ errorMessage }}</p>
            </div>
        </div>

        <!-- Article Content -->
        <div v-else class="flex flex-col max-w-5xl mx-auto">
            <!-- Article Header -->
            <div class="mb-8 px-4 md:px-0">
                <div class="flex items-center justify-center mb-2">
                    <span
                        class="bg-blue-100 text-blue-800 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                        {{ article.category }}
                    </span>
                </div>

                <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
                    {{ article.title }}
                </h1>

                <div class="flex flex-col sm:flex-row justify-center items-center text-gray-600 gap-2 sm:gap-6 mb-4">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>By <span class="font-medium text-gray-800">{{ article.author }}</span></span>
                    </div>

                    <div class="hidden sm:block text-gray-400">•</div>

                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{{ formattedDate }}</span>
                    </div>
                </div>
            </div>

            <!-- Featured Image with elegant frame -->
            <div v-if="article.imagePath" class="mb-10 px-4 md:px-0">
                <div class="relative rounded-xl overflow-hidden shadow-lg bg-white p-2">
                    <img :src="`http://server.salmanfrds.com${article.imagePath}`" alt="Article Featured Image"
                        class="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            <!-- Synopsis Card -->
            <div class="mb-10 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-sm p-6 mx-4 md:mx-0">
                <h2 class="text-lg font-semibold text-blue-800 mb-2">Synopsis</h2>
                <p class="text-gray-700 leading-relaxed italic">
                    {{ article.synopsis }}
                </p>
            </div>

            <!-- Article Content -->
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8 lg:p-10 mb-10 mx-4 md:mx-0">
                <div ref="quillContainer" class="prose prose-lg max-w-none text-gray-800 leading-relaxed"></div>
            </div>

            <!-- Article Footer -->
            <div
                class="flex flex-col sm:flex-row justify-between items-center bg-gray-50 rounded-lg p-6 mx-4 md:mx-0 border border-gray-100">
                <div class="mb-4 sm:mb-0">
                    <p class="text-gray-600">Share this article:</p>
                    <div class="flex space-x-4 mt-2">
                        <!-- Facebook -->
                        <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://ppiiium.salmanfrds.com/article/${article._id}`"
                            target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 text-xl">
                            <i class="fab fa-facebook"></i>
                        </a>

                        <!-- X / Twitter -->
                        <a :href="`https://twitter.com/intent/tweet?url=https://ppiiium.salmanfrds.com/article/${article._id}&text=Check out this article!`"
                            target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-600 text-xl">
                            <i class="fab fa-twitter"></i>
                        </a>

                        <!-- LinkedIn -->
                        <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://ppiiium.salmanfrds.com/article/${article._id}`"
                            target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-blue-900 text-xl">
                            <i class="fab fa-linkedin"></i>
                        </a>

                        <!-- Telegram -->
                        <a :href="`https://t.me/share/url?url=https://ppiiium.salmanfrds.com/article/${article._id}&text=Check out this article!`"
                            target="_blank" rel="noopener noreferrer" class="text-sky-500 hover:text-sky-700 text-xl">
                            <i class="fab fa-telegram"></i>
                        </a>

                        <!-- WhatsApp -->
                        <a :href="`https://api.whatsapp.com/send?text=Check out this article! https://ppiiium.salmanfrds.com/article/${article._id}`"
                            target="_blank" rel="noopener noreferrer"
                            class="text-green-500 hover:text-green-700 text-xl">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>

                </div>

                <router-link to="/pena-kita/all"
                    class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke artikel
                </router-link>
            </div>

        </div>
    </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Quill from "quill"; // Import Quill

export default {
    name: "Article",
    setup() {
        const route = useRoute();
        const article = ref(null);
        const loading = ref(true);
        const errorMessage = ref("");
        const quillContainer = ref(null); // Reference for Quill container

        onMounted(async () => {
            try {
                const response = await fetch(
                    `https://server.salmanfrds.com/api/article/${route.params.id}`
                );
                if (!response.ok) throw new Error("Failed to fetch article");

                article.value = await response.json();

                // Wait until article is loaded before setting Quill content
                setTimeout(setContent, 100);
            } catch (error) {
                errorMessage.value = error.message;
            } finally {
                loading.value = false;
            }
        });

        const setContent = () => {
            if (!article.value || !article.value.details) return;

            try {
                const quill = new Quill(quillContainer.value, {
                    theme: "snow",
                    readOnly: true,
                    modules: { toolbar: false },
                });

                const parsedDetails = JSON.parse(article.value.details);
                quill.setContents(parsedDetails);
            } catch (error) {
                console.error("Error initializing Quill", error);
            }
        };

        return {
            article,
            loading,
            errorMessage,
            quillContainer,
            formattedDate: computed(() => {
                return article.value
                    ? new Date(article.value.createdAt).toLocaleDateString()
                    : "";
            }),
        };
    },
};
</script>
