<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const user = ref(null);
const articles = ref([]);
const errorMessage = ref("");

async function fetchDashboard() {
    try {
      const response = await fetch("https://server.salmanfrds.com/api/dashboard", {
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
};

async function deleteArticle(id, name) {
  const confirmDelete = await areYouSure(name); // Wait for confirmation
  if (!confirmDelete) return; // Stop execution if user cancels

  try {
    const response = await fetch("https://server.salmanfrds.com/api/delete", {
      method: "POST",
      credentials: "include", // ✅ Sends cookies (JWT)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }), // ✅ Send the article ID
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to delete article");
    }

    await Swal.fire({
      title: "Deleted!",
      text: "The article has been deleted.",
      icon: "success",
    });

    window.location.reload(); // Refresh the page or update UI dynamically
  } catch (error) {
    console.error("Error deleting article:", error.message);
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
    });
  }
}

async function areYouSure(name) {
  const result = await Swal.fire({  // ✅ Add `await` to wait for the result
    title: "Are you sure?",
    text: `Do you want to delete the article "${name}"? This action cannot be undone!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "DELETE",
    cancelButtonText: "CANCEL",
  });

  return result.isConfirmed; // ✅ Now correctly waits and returns true/false
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
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <p class="flex items-center">
            <span class="font-medium mr-2 text-gray-600">Username:</span>
            <span class="text-gray-800">{{ user.username }}</span>
          </p>
          <p class="flex items-center">
            <span class="font-medium mr-2 text-gray-600">Email:</span>
            <span class="text-gray-800">{{ user.email }}</span>
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
        <router-link
          to="/submit"
          class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
            Artikel Baru
        </router-link>
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
          class="bg-white border border-gray-200 flex justify-between items-center rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5"
        >
          <div>
            <router-link :to="`/article/${article._id}`"><h3 class="text-xl font-bold text-gray-900 mb-2">{{ article.title }}</h3></router-link>
            <p class="text-sm text-gray-500 italic">
              Created on: {{ new Date(article.createdAt).toLocaleString() }}
            </p>
          </div>
          <div class="flex gap-2">
            <button @click="deleteArticle(article._id, article.title)" class="bg-red-500 text-white px-3 py-1 rounded-full">
              Delete
            </button>
            <router-link :to="`/edit/${article._id}`" class="bg-blue-500 text-white px-3 py-1 rounded-full">Edit</router-link>
          </div>
        </div>
      </div>
      <p v-else class="text-gray-500 italic text-center py-4">No articles found.</p>
    </div>
  </section>
</template>
