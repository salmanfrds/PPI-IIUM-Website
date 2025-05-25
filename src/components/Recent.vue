<template>
    <section class="py-12 min-h-[50vh] xl:min-h-screen flex flex-col gap-8 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300">
        <h2 class="text-4xl relative font-bold text-center text-gray-800 mb-">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Terbaru<br></span>
            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-full"></div>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8 gap-8 mt-2 md:mt-6">
            <div data-aos="fade-down" v-for="(article, index) in articles" :key="index"
                class="bg-white border border-zinc-200 text-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                <router-link :to="`/article/${article._id}`" class="min-h-14 flex items-center justify-center">
                  <h2 class="text-base md:text-lg text-center font-bold text-gray-800 hover:text-gray-600 transition-all duration-300 p-2">
                      {{ article.title }}
                  </h2>
                </router-link>
                <div class="flex justify-between items-center text-gray-700 text-sm px-4">
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-user fa-sm text-gray-800"></i>
                        <span class="">{{ article.author }}</span>
                        <span class="rounded-md">{{ article.category }}</span>
                    </div>
                    <p class="text-gray-500">{{ new Date(article.createdAt).toLocaleDateString() }}</p>
                </div>
                <img 
                  :src="article.imagePath ? `https://server.salmanfrds.com${article.imagePath}` : 'https://ppiiium.com/assets/ppiiium-logo-DD4ICE5q.png'" 
                  class="aspect-[4/3] object-cover rounded-sm px-2" 
                  alt="Article image"
                >
                <router-link :to="`/article/${article._id}`" class="w-full mt-4">
                  <p class="border-t text-center py-2 w-1/3 mx-auto hover:text-gray-500 transition-colors duration-200">
                      see more
                  </p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name: "AppPosts",
        data() {
            return {
                articles: [],
            };
        },
        mounted() {
            this.fetchArticles();
            AOS.init({
              duration: 300,
              once: true
            });
        },
        methods: {
            fetchArticles() {
                fetch("https://server.salmanfrds.com/api/recent") // Use your backend endpoint
                    .then((response) => response.json())
                    .then((articles) => {
                        this.articles = articles.reverse(); // Save articles in the component's state
                    })
                    .catch((error) => console.error("Error fetching articles:", error));
            },
        },
    };
</script>