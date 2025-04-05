<template>
  <section id="loginPage" class="min-h-screen w-full flex items-center justify-center my-auto py-14 bg-gradient-to-br from-zinc-200 via-white to-zinc-50">
    <div class="w-full max-w-md px-4">
      <div class="bg-white shadow-2xl rounded-xl overflow-hidden">
        <div class="p-6">
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
              <label for="password" class="block text-left text-sm font-medium text-gray-700 mb-2">Password <span v-if="wrongPass" class="text-red-500 ml-2">{{ wrongPass }} </span></label>
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
          <div class="mt-6 text-center">
            <a
              href="https://wa.me/6282120547409?text=Halo%2C%20saya%20ingin%20mendaftar%20akun%20PPI%20IIUM.%20Mohon%20informasinya.%20Terima%20kasih."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-2 text-sm font-semibold text-green-600 hover:text-green-800 transition"
            >
              Register via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      wrongPass: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);

      // Perform your login logic (e.g., API request)
      fetch("https://server.salmanfrds.com/api/login", {
        method: "POST",
        credentials: "include",
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
      console.log("Response from server:", resData);
      // display wrong email or password button
      if (resData.success === false){
        this.wrongPass = "Wrong email or password, please try again";
      } else {
        this.wrongPass = "";
      }
    },
  },
};
</script>