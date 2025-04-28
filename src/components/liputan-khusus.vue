<script setup></script>

<template>
  <section class="flex flex-col gap-8 mt-2">
    <h2 class="text-4xl relative font-bold text-center text-gray-800 mb-">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Pena Kita<br></span>
      <span class="text-xl md:text-2xl text-gray-600">Liputan Khusus</span>
      <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-full"></div>
    </h2>
    <div class="grid grid-cols-1 gap-4 mx-auto px-8 md:px-12" id="articles">
      <div v-for="(article, index) in articles" :key="index"
        class="w-full md:w-[90%] lg:w-4/5 mx-auto bg-white border border-zinc-200 text-zinc-800 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="grid grid-rows-none grid-cols-4">
          <div class="flex-grow flex flex-col col-span-4 md:col-span-3">
            <router-link :to="`/article/${article._id}`" class="group">
              <h2
                class="text-base md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-all duration-300 px-4 pt-4 pb-2 border-b border-gray-100">
                {{ article.title }}
              </h2>
            </router-link>

            <div class="flex justify-between items-center text-gray-700 text-xs md:text-sm px-4 py-2">
              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-user fa-sm text-gray-800"></i>
                <span class="font-medium">{{ article.author }}</span>
                <span class="bg-gray-100 px-2 py-1 rounded-full text-xs">{{ article.category }}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-clock text-gray-500"></i>
                <p class="text-gray-500">{{ new Date(article.createdAt).toLocaleDateString() }}</p>
              </div>
            </div>

            <div class="flex-grow px-4 py-3">
              <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">{{ article.synopsis }}</p>
            </div>

            <router-link :to="`/article/${article._id}`" class="mt-auto mb-2">
              <div
                class="flex items-center justify-center gap-2 mx-auto w-max px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <span>Read more</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </div>
            </router-link>
          </div>
          <!-- Small image on the right side -->
          <div class="p-2 items-center hidden md:flex">
            <img :src="`https://server.salmanfrds.com${article.imagePath}`"
              class="aspect-square object-cover rounded-md" alt="article thumbnail">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "AppPosts",
      data() {
        return {
          articles: [], // Store articles
        };
      },
      mounted() {
        // Fetch articles when the component is mounted
        this.fetchArticles();
      },
      methods: {
        fetchArticles() {
          fetch("https://server.salmanfrds.com/api/articles/litbang") // Use your backend endpoint
            .then((response) => response.json())
            .then((articles) => {
              this.articles = articles.reverse(); // Save articles in the component's state
            })
            .catch((error) => console.error("Error fetching articles:", error));
        }
    ,
      },
    };
</script>