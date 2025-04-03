<template>
    <section class="py-8 mt-16 container mx-auto">
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else-if="errorMessage" class="text-danger text-center">
            {{ errorMessage }}
        </div>
        <div v-else class="flex flex-col gap-4 md:gap-6 items-center">
            <img v-if="article.imagePath" :src="`http://localhost:3000${article.imagePath}`" alt="Article Image"
                class="my-4 rounded-lg w-3/4 object-cover border" />

            <h1 class="text-2xl md:text-4xl font-bold">{{ article.title }}</h1>
            <p class="text-gray-600">By {{ article.author }} | {{ formattedDate }}</p>
            <p class="text-gray-500 px-6 md:px-0 md:w-3/4 text-justify text-lg">
                <strong>Synopsis:</strong> {{ article.synopsis }}
            </p>

            <!-- If you want to display Quill content later, you'll need a proper parser -->
            <div class="text-sm text-justify text-gray-800 font-normal leading-relaxed px-4 md:px-24 w-full ">
                <div ref="quillContainer"></div>
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
                    `http://localhost:3000/api/article/${route.params.id}`
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
