<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-4 mt-8">
    <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-6">
        <h1 class="text-2xl md:text-3xl font-bold text-white text-center">
          Post Artikel Baru
        </h1>
        <p class="text-gray-300 text-center mt-2">Fill in the details to publish your article</p>
      </div>
      
      <!-- Form Content -->
      <form @submit.prevent="handleSubmit" class="p-6 md:p-8" enctype="multipart/form-data">
        <div class="space-y-8">
          <!-- Title Input -->
          <div class="form-group">
            <label for="title" class="flex items-center text-sm font-medium text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Article Title <span class="text-red-500">*</span>
            </label>
            <input 
              v-model="formData.title" 
              type="text" 
              id="title" 
              placeholder="Enter a compelling title for your article" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>
          
          <!-- Category and Image Upload -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Category Select -->
            <div class="md:col-span-2">
              <label for="category" class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Category <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select 
                  v-model="formData.category" 
                  id="category" 
                  required
                  class="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="" disabled selected>Select a category</option>
                  <option value="Pena Kastrat">Pena Kastrat</option>
                  <option value="Seboga">Seboga</option>
                  <option value="Liputan Khusus">Liputan Khusus</option>
                  <option value="Litbang">Litbang</option>
                  <option value="Lain Lain">Lain-Lain</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Image Upload -->
            <div class="image-upload-container">
              <div class="col-span-1">
                <label for="imageUploader" class="block text-sm font-medium text-gray-800 mb-2">
                  Upload Image
                </label>
                <input ref="fileUpload" type="file" id="imageUploader" @change="handleImageUpload" accept="image/*"
                  class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition" />
              </div>
            </div>
          </div>
          
          <!-- Synopsis Textarea -->
          <div>
            <label for="synopsis" class="flex items-center text-sm font-medium text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Synopsis <span class="text-red-500">*</span>
            </label>
            <textarea 
              v-model="formData.synopsis" 
              id="synopsis" 
              placeholder="Write a brief summary of your article (maximum 150 words)" 
              required 
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            ></textarea>
            <p class="text-xs text-gray-500 mt-1">
              A concise synopsis helps readers understand what your article is about
            </p>
          </div>
          
          <!-- Rich Text Editor -->
          <div>
            <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Article Content <span class="text-red-500">*</span>
            </label>
            <div class="border border-gray-300 rounded-lg overflow-hidden">
              <div class="bg-gray-50 border-b border-gray-300 px-4 py-2 flex items-center">
                <span class="text-sm font-medium text-gray-600">Editor</span>
              </div>
              <div ref="editor" class="min-h-[50vh] h-96 bg-white"></div>
            </div>
          </div>
          <button 
            type="submit"
            class="px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Publish Article
          </button>
        </div>
      </form>
    </div>
    
    <!-- Additional Instructions -->
    <div class="max-w-4xl mx-auto mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 text-sm text-blue-700">
  <h3 class="font-medium flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Tips Menulis Artikel yang Baik
  </h3>
  <ul class="list-disc pl-8 mt-2 space-y-1">
    <li>Gunakan bahasa yang jelas dan ringkas</li>
    <li>Sertakan gambar yang relevan untuk memperkuat konten</li>
    <li>Pisahkan paragraf panjang agar lebih mudah dibaca</li>
    <li>Periksa kembali tulisan sebelum dipublikasikan</li>
  </ul>
</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Swal from "sweetalert2";

export default defineComponent({
  name: "ArticleForm",
  data() {
    return {
      formData: {
        title: "",
        category: "",
        synopsis: "",
      },
      editor: null,
    };
  },
  mounted() {
    // Initialize Quill editor
    this.editor = new Quill(this.$refs.editor, {
      theme: "snow",
      placeholder: 'click disini untuk menulis...',
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          ["link", "blockquote", "code-block"],
          [{ list: "ordered" }],
          [{ align: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["clean"],
        ],
      },
    });
  },
  methods: {
    redirectToDashboard() {
      this.$router.push('/dashboard');
    },
    handleImageUpload(event) {
      // Optionally handle image validation or preview
      console.log("Image selected:", event.target.files[0]);
    },
    async handleSubmit() {
      const form = new FormData();
      const details = this.editor.getContents();

      form.append("title", this.formData.title);
      form.append("category", this.formData.category);
      form.append("synopsis", this.formData.synopsis);
      form.append("avatar", this.$refs.fileUpload.files[0]);
      form.append("details", JSON.stringify(details));

      try {
        const response = await fetch("https://server.salmanfrds.com/api/articles", {
          method: "POST",
          body: form,
          credentials: "include",
        });

        if (!response.ok) throw new Error("Failed to submit article");

        const data = await response.json();
        this.showNotification(
          "success",
          "Article Posted!",
          "Your article has been successfully submitted."
        );
        console.log("Article added:", data);
        this.redirectToDashboard();
      } catch (error) {
        console.error("Error:", error);
        this.showNotification(
          "error",
          `Submission Failed ${error}`,
          "Failed to submit your article. Please try again."
        );
      }
    },
    showNotification(icon, title, text) {
      Swal.fire({
        icon,
        title,
        text,
        confirmButtonColor: icon === "success" ? "#3b82f6" : "#ef4444",
      });
    },
  },
});
</script>
