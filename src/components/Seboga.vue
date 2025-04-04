<script setup></script>

<template>
    <section class="flex flex-col gap-8 mt-2">
      <h2 class="text-gray-800 text-2xl md:text-3xl font-bold text-center">PENA KITA<br> <span class="text-xl md:text-2xl text-gray-600">SEBOGA</span> </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto px-8 md:px-12" id="articles">
        <div v-for="(article, index) in articles" :key="index"
          class="bg-gray-200 text-gray-800 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-4">
          <router-link :to="`/article/${article._id}`">
            <h2 class="text-lg md:text-xl text-center font-bold text-gray-800 hover:text-gray-600 transition-all duration-300 p-2">
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
          <img :src="`https://server.salmanfrds.com${article.imagePath}`" class="aspect-[4/3] object-cover rounded-sm px-2" alt="image">
          <p class="px-4 py-2 text-justify">{{ article.synopsis }}</p>
        </div>
        <!-- fixed now -->
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
          fetch("https://server.salmanfrds.com/api/articles/seboga") // Use your backend endpoint
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