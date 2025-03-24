<template>
  <div class="bg-gray-300 min-h-screen flex flex-col items-center justify-center mt-16 py-8">
    <div id="adminPage" class="w-[80vw] bg-white shadow-2xl rounded-xl p-8 border border-gray-400">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wider">
        Post
      </h1>
      <form @submit.prevent="handleSubmit" class="space-y-6" enctype="multipart/form-data">
        <div class="grid grid-row-2 md:grid-cols-3 gap-2 md:gap-4">
          <div class="col-span-1 md:col-span-2">
            <label for="title" class="block text-sm font-medium text-gray-800 mb-2">Article Title</label>
            <input v-model="formData.title" type="text" id="title" placeholder="Enter The Article Title" required
              class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition" />
          </div>
          <div class="col-span-1">
            <label for="author" class="block text-sm font-medium text-gray-800 mb-2">Author</label>
            <input v-model="formData.author" type="text" id="author" required
              class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition" />
          </div>
        </div>
        <div class="grid grid-row-2 md:grid-cols-3 gap-2 md:gap-4">
          <div class="col-span-1 md:col-span-2">
            <label for="category" class="block text-sm font-medium text-gray-800 mb-2">Categories</label>
            <select v-model="formData.category" id="category" required
              class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition">
              <option value="" disabled selected>Select Category</option>
              <option value="full-time">Pena Kastrat</option>
              <option value="part-time">Seboga</option>
              <option value="part-time">Cerita Kita</option>
              <option value="part-time">Lain-Lain</option>
            </select>
          </div>
          <div class="image-upload-container">
            <div class="col-span-1">
              <label for="imageUploader" class="block text-sm font-medium text-gray-800 mb-2">
                Upload Image
              </label>
              <input ref="fileUpload" type="file" id="imageUploader" @change="handleImageUpload" accept="image/*"
                class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition" />
            </div>

            <!-- Cropper Modal -->
            <div v-if="showCropper" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div class="bg-white p-6 rounded-lg max-w-xl w-full">
                <div class="mb-4">
                  <VueCropper ref="cropper" :src="imageSrc" :options="cropperOptions" @ready="cropperReady" />
                </div>
                <div class="flex justify-between">
                  <button @click="cancelCrop" class="px-4 py-2 bg-red-500 text-white rounded">
                    Cancel
                  </button>
                  <button @click="cropImage" class="px-4 py-2 bg-green-500 text-white rounded">
                    Crop & Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label for="synopsis" class="block text-sm font-medium text-gray-800 mb-2">Synopsis</label>
          <textarea v-model="formData.synopsis" id="synopsis" placeholder="Enter synopsis" required rows="3"
            class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-blue-gray mb-2">Details</label>
          <div ref="editor" class="min-h-[60vh] text-blue-gray"></div>
        </div>
        <div class="text-center">
          <button type="submit"
            class="bg-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 transition-transform transform hover:scale-105">
            Submit Article
          </button>
        </div>
      </form>
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
        author: "",
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
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          ["link", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["clean"],
        ],
      },
    });
  },
  methods: {
    handleImageUpload(event) {
      // Optionally handle image validation or preview
      console.log("Image selected:", event.target.files[0]);
    },
    async handleSubmit() {
      const form = new FormData();
      const details = this.editor.getContents();
      const today = new Date().toISOString().split("T")[0];

      form.append("title", this.formData.title);
      form.append("author", this.formData.author);
      form.append("category", this.formData.category);
      form.append("synopsis", this.formData.synopsis);
      form.append("avatar", this.$refs.fileUpload.files[0]);
      form.append("details", JSON.stringify(details));
      form.append("uploadDate", today);

      try {
        const response = await fetch("http://localhost:3000/api/articles", {
          method: "POST",
          body: form,
        });

        if (!response.ok) throw new Error("Failed to submit article");

        const data = await response.json();
        this.showNotification(
          "success",
          "Article Posted!",
          "Your article has been successfully submitted."
        );
        console.log("Article added:", data);
        setTimeout(() => location.reload(), 2000);
      } catch (error) {
        console.error("Error:", error);
        this.showNotification(
          "error",
          "Submission Failed",
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


<style scoped>
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
