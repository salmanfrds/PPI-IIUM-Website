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
  <section class="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 py-12 mt-4">
    <div class="container mx-auto px-4 py-10 max-w-4xl">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Dashboard</span>
      </h1>
      
      <!-- Error Message -->
      <div 
        v-if="errorMessage" 
        class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm mb-6 animate-fade-in" 
        role="alert"
      >
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{{ errorMessage }}</span>
        </div>
      </div>
      
      <!-- User Information -->
      <div v-if="user" class="bg-white shadow-lg rounded-xl p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-2xl font-semibold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            User Profile
          </h2>
          <router-link
            to="/submit"
            class="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Article
          </router-link>
        </div>
        
        <div class="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center">
              <div class="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Username</p>
                <p class="font-medium text-gray-800">{{ user.username }}</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium text-gray-800">{{ user.email }}</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="font-medium text-gray-800">+ {{ user.phone }}</p>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="bg-amber-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Role</p>
                <p class="font-medium text-gray-800">{{ user.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
        <p class="text-gray-500">Loading user information...</p>
      </div>
      
      <!-- Articles Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Your Articles
        </h2>
        
        <div v-if="articles.length > 0" class="space-y-4">
          <div 
            v-for="article in articles" 
            :key="article._id" 
            class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div class="flex flex-col md:flex-row justify-between">
              <div class="p-5 flex-1">
                <router-link :to="`/article/${article._id}`">
                  <h3 class="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{{ article.title }}</h3>
                </router-link>
                <p class="text-sm text-gray-500 flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ new Date(article.createdAt).toLocaleString() }}
                </p>
              </div>
              
              <div class="flex items-center bg-gray-50 md:bg-transparent p-3 md:pr-5 border-t md:border-t-0 md:border-l border-gray-100">
                <router-link 
                  :to="`/edit/${article._id}`" 
                  class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg mr-2 flex items-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </router-link>
                
                <button 
                  @click="deleteArticle(article._id, article.title)" 
                  class="bg-white hover:bg-red-50 text-red-500 border border-red-200 font-medium px-4 py-2 rounded-lg flex items-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="bg-white rounded-xl shadow-sm p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p class="text-gray-500 mb-4">You haven't created any articles yet.</p>
          <router-link 
            to="/submit" 
            class="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Create your first article
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
