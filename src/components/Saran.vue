<script setup></script>
<template>
    <section class="flex items-center justify-center min-h-[50vh] bg-gray-100">
        <div class="w-3/4 p-10">
            <h2 class="text-3xl font-bold text-center">MASUKAN DAN SARAN</h2>
            <p class="text-center text-gray-500 italic text-lg mt-2">*Masukan anda akan tetap bersifat anonim</p>

            <textarea
                class="w-full h-60 p-6 mt-6 text-gray-700 bg-white border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                placeholder="click here..."></textarea>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 text-xl text-black bg-white rounded-lg shadow-lg transition">
                    Submit
                </button>
            </div>
        </div>
    </section>
</template>