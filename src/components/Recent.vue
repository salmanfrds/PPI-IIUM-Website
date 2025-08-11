<script setup>
import AOS from 'aos'; 
import {onMounted, ref} from 'vue';

const articles = ref([])

const fetchRecent = async () => {
    try{
        const res = await fetch("https://server.salmanfrds.com/api/recent");
        articles.value = await res.json()
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    AOS.init({
      duration: 300,
      once: true
    });

    fetchRecent(); 
});

</script>

<template>
    <section class="py-16 min-h-[50vh] md:px-12 xl:min-h-screen flex flex-col bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500">Terbaru</span>
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-full"></div>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                <div 
                    v-for="(article, index) in articles" 
                    :key="index"
                    data-aos="fade-up" 
                    data-aos-delay="50" 
                    class="bg-white border border-zinc-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                    <img 
                        :src="article.imagePath ? `https://server.salmanfrds.com${article.imagePath}` : 'https://ppiiium.com/assets/ppiiium-logo-DD4ICE5q.png'" 
                        class="aspect-[16/9] object-cover w-full" 
                        alt="Article image"
                    >
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex justify-between items-center text-xs text-gray-500 mb-3">
                            <div class="flex gap-2 items-center">
                                <i class="fa-solid fa-user text-gray-600"></i>
                                <span>{{ article.author }}</span>
                            </div>
                            <p>{{ new Date(article.createdAt).toLocaleDateString() }}</p>
                        </div>
                        
                        <router-link :to="`/article/${article._id}`" class="mb-3">
                            <h2 class="text-xl font-bold text-gray-800 hover:text-gray-600 transition-all duration-300 line-clamp-2">
                                {{ article.title }}
                            </h2>
                        </router-link>
                        
                        <span class="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full w-fit mb-4">
                            {{ article.category }}
                        </span>
                        
                        <p class="text-gray-600 line-clamp-3 mb-4 flex-grow">
                            {{ article.synopsis }}
                        </p>
                        
                        <router-link 
                            :to="`/article/${article._id}`" 
                            class="mt-auto text-center py-2 border-t border-zinc-100 text-zinc-600 font-medium hover:text-zinc-800 transition-colors duration-200 group-hover:text-zinc-800"
                        >
                            Read More →
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>