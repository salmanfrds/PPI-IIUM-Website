<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const leftNavItems = [
     {title: 'PPI-IIUM', path: '/' },
     {title: 'About Us', path: '/ppi-iium' },
     {title: 'Kontak',   path: '/kontak' }
  ];
  
  const rightNavItems = [
    { title: 'Pena Kita', path: '/pena-kita', isButton: false },
    { title: 'Info Kuliah', path: '/info-kuliah', isButton: false },
    { title: 'Login', path: '/dashboard', isButton: true }
  ];
</script>

<template>
  <header
    :class="[
      'fixed bg-zinc-900/80 shadow-lg backdrop-blur-md top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center flex-row-reverse justify-between xl:grid xl:grid-cols-5 py-2 px-4 md:px-12',
      isScrolled ? '-translate-y-full' : 'translate-y-0',
      { 'shadow-xl': !isScrolled }
    ]"
    aria-label="Site Header"
  >  
    <!-- Left-side Navigation (Desktop) -->
    <nav class="hidden xl:block col-span-2 m-auto" aria-label="Primary Left Navigation">
      <ul class="flex text-xl font-bold items-center gap-8">
        <li v-for="(item, index) in leftNavItems" :key="`left-${index}`">
          <router-link 
            :to="item.path" 
            class="group inline-block text-zinc-100 p-2 relative overflow-hidden"
            :aria-current="$route.path === item.path ? 'page' : undefined"
          >
            {{ item.title }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-100 transform origin-left transition-all duration-300 ease-out group-hover:scale-x-100 scale-x-0"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-100 transform origin-left scale-x-100"></span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Logo -->
    <router-link to="/" class="block cursor-pointer lg:mx-auto" aria-label="PPIIIUM Homepage">
      <img 
        src="../assets/ppiiium-logo.png" 
        alt="PPIIIUM Logo" 
        class="h-12 xl:h-14 object-contain transition-transform duration-300 hover:scale-105"
      >
    </router-link>

    <!-- Right-side Navigation (Desktop) -->
    <nav class="hidden xl:block col-span-2 m-auto" aria-label="Primary Right Navigation">
      <ul class="flex text-xl items-center gap-8">
        <li v-for="(item, index) in rightNavItems" :key="`right-${index}`">
          <router-link 
            v-if="!item.isButton"
            :to="item.path" 
            class="group inline-block font-bold text-zinc-100 p-2 relative overflow-hidden"
            :aria-current="$route.path === item.path ? 'page' : undefined"
          >
            {{ item.title }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-100 transform origin-left transition-all duration-300 ease-out group-hover:scale-x-100 scale-x-0"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-100 transform origin-left scale-x-100"></span>
          </router-link>
          <router-link 
            v-else
            :to="item.path" 
            @click="$emit('close')"
            class="flex items-center gap-2 text-zinc-800 hover:text-black font-medium bg-zinc-100 hover:bg-white px-4 py-2 rounded shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button 
      class="xl:hidden text-zinc-100 p-1 rounded hover:bg-zinc-800/50 transition-colors"
      @click="$emit('toggleSidebar')"
      aria-label="Toggle mobile menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>
</template>
