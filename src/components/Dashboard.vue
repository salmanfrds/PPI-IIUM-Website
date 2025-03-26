<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);
const articles = ref([]);
const errorMessage = ref("");

async function fetchDashboard() {
    try {
        const response = await fetch("http://localhost:3000/api/dashboard", {
            method: "GET",
            credentials: "include", // ✅ Sends cookies (JWT)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch dashboard");
        }

        const data = await response.json();
        console.log("Dashboard Data:", data);

        user.value = data.user;          // ✅ Store user data
        articles.value = data.articles;  // ✅ Store articles data

    } catch (error) {
        console.error("Error fetching dashboard:", error);
        errorMessage.value = "Failed to load dashboard data.";
    }
}

// ✅ Fetch dashboard when the component is mounted
onMounted(fetchDashboard);
</script>

<template>
  <section class="container mx-auto px-4 py-8 mt-16 max-w-2xl">
    <h1 class="text-3xl text-center font-bold text-gray-800 mb-6">Dashboard</h1>
    
    <!-- Error Message -->
    <p 
      v-if="errorMessage" 
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" 
      role="alert"
    >
      {{ errorMessage }}
    </p>
  
    <!-- User Information -->
    <div v-if="user" class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">User Profile</h2>
      <div class="space-y-2">
        <p class="flex items-center">
          <span class="font-medium mr-2 text-gray-600">Username:</span>
          <span class="text-gray-800">{{ user.username }}</span>
        </p>
        <p class="flex items-center">
          <span class="font-medium mr-2 text-gray-600">Phone:</span>
          <span class="text-gray-800"> + {{ user.phone }}</span>
        </p>
        <p class="flex items-center">
          <span class="font-medium mr-2 text-gray-600">Role:</span>
          <span class="text-gray-800">{{ user.role }}</span>
        </p>
      </div>
    </div>
    <p v-else class="text-gray-500 italic">Loading user information...</p>
    
    <!-- Articles Section -->
    <div class="mt-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Your Articles</h2>
      
      <div v-if="articles.length > 0" class="space-y-4">
        <div 
          v-for="article in articles" 
          :key="article._id" 
          class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5"
        >
          <router-link :to="`/article/${article._id}`"><h3 class="text-xl font-bold text-gray-900 mb-2">{{ article.title }}</h3></router-link>
          <p class="text-sm text-gray-500 italic">
            Created on: {{ new Date(article.createdAt).toLocaleString() }}
          </p>
        </div>
      </div>
      <p v-else class="text-gray-500 italic text-center py-4">No articles found.</p>
    </div>
  </section>
</template>
