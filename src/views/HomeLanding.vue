<script setup>
    import Hero from '@/components/Hero.vue';
    import Kunjungan from '@/components/Kunjungan.vue';
    import Recent from '@/components/Recent.vue';
    import Merdeka from '../components/Merdeka.vue'
    import BannerMerdeka from '../components/Banner-Merdeka.vue';
</script>

<template>
  <section>
    <Merdeka />
    <BannerMerdeka />
    <Kunjungan />
    <Recent />
  </section>
</template>