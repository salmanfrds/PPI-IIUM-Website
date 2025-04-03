<template>
  <div class="bg-gray-300 min-h-screen flex flex-col items-center justify-center mt-16 py-8">
    <div id="adminPage" class="w-[80vw] bg-white shadow-2xl rounded-xl p-8 border border-gray-400">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wider">
        Post
      </h1>
      <form @submit.prevent="handleSubmit" class="space-y-6" enctype="multipart/form-data">
        <div class="col-span-1 md:col-span-2">
          <label for="title" class="block text-sm font-medium text-gray-800 mb-2">Article Title</label>
          <input v-model="formData.title" type="text" id="title" placeholder="Enter The Article Title" required
            class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition" />
        </div>
        <div class="grid grid-row-2 md:grid-cols-3 gap-2 md:gap-4">
          <div class="col-span-1 md:col-span-2">
            <label for="category" class="block text-sm font-medium text-gray-800 mb-2">Categories</label>
            <select v-model="formData.category" id="category" required
              class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition">
              <option value="" disabled selected>Select Category</option>
              <option value="Pena Kastrat">Pena Kastrat</option>
              <option value="Seboga">Seboga</option>
              <option value="Ruang Cerita">Ruang Cerita</option>
              <option value="Lain Lain">Lain-Lain</option>
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
          </div>
        </div>
        <div>
          <label for="synopsis" class="block text-sm font-medium text-gray-800 mb-2">Synopsis</label>
          <textarea v-model="formData.synopsis" id="synopsis" placeholder="Enter synopsis" required rows="3"
            class="w-full px-4 py-2 border-2 border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-blue-gray mb-2">Details</label>
          <div ref="editor" class="min-h-[80vh] text-blue-gray"></div>
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
      articleId: this.$route.params.id,
      formData: {
        title: "",
        category: "",
        synopsis: "",
        editor: null,
      },
    };
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      theme: "snow",
      placeholder: 'Click here to write...',
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
    console.log("Quill editor initialized!");
    if (this.articleId) {
      console.log("Fetching article with ID:", this.articleId);
      this.fetchArticleData(this.articleId);
    }
  },
  methods: {
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

      // console.log("after:" + details)
      try {
        const response = await fetch(`http://localhost:3000/api/edit/${this.articleId}`, {
          method: "POST",
          body: form,
          credentials: "include",
        });

        if (!response.ok) throw new Error("Failed to edit article");

        const data = await response.json();
        this.showNotification(
          "success",
          "Article Edited!",
          "Your article has been successfully edited."
        );
        console.log("Article updated:", data);
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
    async fetchArticleData(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/edit/${id}`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) throw new Error("Failed to fetch article");

        const data = await response.json();

        this.formData.title = data.title;
        this.formData.category = data.category;
        this.formData.synopsis = data.synopsis;
        const quillContent = JSON.parse(data.details);

        console.log("Parsed quillContent:", quillContent);
        
        this.editor.setContents(quillContent);
      } catch (error) {
        console.error("Error fetching article:", error);
        this.showNotification("error", "Failed to Load", "Could not fetch article details.");
      }
    },
  },
});
</script>
