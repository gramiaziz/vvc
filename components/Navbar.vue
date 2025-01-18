<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="flex items-center px-6 py-1 bg-[#072929] shadow-md fixed top-0 left-0 w-full z-50">
    <div class="logo flex-shrink-0 w-24" >
      <img src="/images/logo.png" alt="Logo" class="w-24 h-auto" />
    </div>

    <div class="flex-grow flex justify-center gap-8 ml-18">
      <router-link to="#home" class="text-stone-300 text-lg">Home</router-link>
      <router-link to="#features" class="text-stone-300 text-lg">Features</router-link>
      <router-link to="#Pricing" class="text-stone-300 text-lg">Pricing</router-link>
      <router-link to="#Testimonials" class="text-stone-300 text-lg">Testimonials</router-link>
    </div>

    <div class="flex gap-4 flex-shrink-0 w-24 justify-end" >
      <Button class="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600 transition duration-300">
        Login
      </Button>
      <Button class="rounded-full border-emerald-500 bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600 transition duration-300">
        SignUp
      </Button>

    </div>
  </div>
</template>

<style scoped>
/* Ensure content avoids hiding under the fixed navbar */
body {
  padding-top: 4rem; /* Adjust this value based on your navbar height */
}
</style>
