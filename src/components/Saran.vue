<script setup>
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import AOS from 'aos';

// --- Reactive State ---
const feedback = ref('');
const message = ref('');
const isLoading = ref(false);

const form = ref(null);

onMounted(() => {
    AOS.init({
        duration: 300,
        once: true
    });
})

// --- Methods ---
const sendEmail = async () => {
    if (!feedback.value.trim()) {
        message.value = "Mohon isi pesan sebelum mengirim.";
        return;
    }

    isLoading.value = true;
    message.value = 'Mengirim...';

    // 2. Use a try...catch block to handle the asynchronous operation.
    try {
        await emailjs.sendForm('service_haxxwoh', 'template_wiqemlk', form.value, {
            publicKey: 'vWfmmP-qCso5vXcK1',
        });

        message.value = "Terima kasih atas masukan Anda!";
        feedback.value = ''; // Clear the input

    } catch (error) {
        console.error('FAILED...', error.text);
        message.value = "Terjadi kesalahan saat mengirim pesan.";
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <section
        class="flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-zinc-200 via-white to-zinc-50 py-12 px-4" data-aos="fade-up">
        <form ref="form" @submit.prevent="sendEmail"
            class="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-zinc-300">
            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-500">Masukan dan
                    Saran</span>
            </h2>
            <p class="text-center text-gray-500 italic md:text-lg mt-2">
                *Masukan anda akan tetap bersifat anonim
            </p>

            <!-- Textarea -->
            <textarea name="message" v-model="feedback" required
                placeholder="Klik di sini untuk menuliskan masukan atau saran..."
                class="w-full h-60 mt-6 p-5 text-gray-700 bg-zinc-100 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all duration-300 resize-none shadow-inner"></textarea>

            <!-- Submit Button -->
            <button type="submit"
                class="block w-full md:w-max mx-auto mt-6 bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-800 hover:text-white text-xl px-6 py-3 rounded-lg text-center hover:scale-105 transition-all duration-300 shadow-xl">
                Submit
            </button>

            <!-- Loading Animation -->
            <div v-if="isLoading" class="flex justify-center mt-4">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-600"></div>
            </div>

            <!-- Feedback Message -->
            <p v-if="message" class="mt-4 text-center text-green-600 font-medium animate-fade-in">
                {{ message }}
            </p>
        </form>
    </section>
</template>

<!-- <script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            feedback: '',
            message: '',
        };
    },
    methods: {
        sendEmail() {
            if (!this.feedback.trim()) {
                this.message = "Mohon isi pesan sebelum mengirim.";
                return;
            }

            emailjs
                .sendForm('service_haxxwoh', 'template_wiqemlk', this.$refs.form, {
                    publicKey: 'vWfmmP-qCso5vXcK1',
                })
                .then(
                    () => {
                        this.message = "Terima kasih atas masukan Anda!";
                        this.feedback = ''; // Clear the input
                    },
                    (error) => {
                        console.error('FAILED...', error.text);
                        this.message = "Terjadi kesalahan saat mengirim pesan.";
                    },
                );
        },
    },
};
</script> -->
