<template>
  <div id="loginPage" class="min-h-[80vh] w-full flex items-center justify-center mt-16 py-8">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-2xl rounded-xl overflow-hidden">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form id="loginForm" @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-left text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="text" id="email" v-model="email" name="email" required
                placeholder="Enter your Email"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300" />
            </div>
            <div>
              <label for="password" class="block text-left text-sm font-medium text-gray-700 mb-2">Password</label>
              <input type="password" id="password" v-model="password" name="password" required
                placeholder="Enter your password"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300" />
            </div>
            <div>
              <button type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "AppLogin",
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  data() {

    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);

      // Perform your login logic (e.g., API request)
      fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            console.log("Authentication successful, ini token nya:", data.token);

            this.router.push('/dashboard'); // Redirect to /submit if successful
          } else {
            console.log("Authentication failed:", data);
          }
          // If 'check' is a method in your Vue component
          if (typeof this.check === "function") {
            this.check(data); // Call the check method with the response data
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    },
    check(resData) {
      // Define your logic for checking the response data
      console.log("Response from server:", resData);
    },
  },
};
</script>