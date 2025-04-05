<template>
    <section
        class="flex items-center justify-center min-h-[50vh] bg-gradient-to-br py-4 from-zinc-200 via-white to-zinc-50">
        <form ref="form" @submit.prevent="sendEmail" class="w-[95%] xl:w-3/4 p-4 md:p-10">
            <h2 class="text-2xl md:text-3xl font-bold text-center">MASUKAN DAN SARAN</h2>
            <p class="text-center text-gray-500 italic md:text-lg mt-2">*Masukan anda akan tetap bersifat anonim</p>

            <textarea name="message" v-model="feedback" required
                class="w-full h-60 p-6 mt-6 text-gray-700 bg-zinc-200 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                placeholder="Klik di sini untuk menuliskan masukan atau saran...">
            </textarea>

            <button type="submit"
                class="block mt-4 bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-800 hover:text-white text-xl px-4 py-2 rounded-lg text-center hover:scale-102 transition-all duration-300 shadow-2xl">
                Submit
            </button>

            <!-- Optional: Display success or error message -->
            <p v-if="message" class="mt-4 text-center text-green-600 font-medium">{{ message }}</p>
        </form>
    </section>
</template>

<script>
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
</script>
