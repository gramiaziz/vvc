<template>
    <div class="top flex items-center justify-between px-6 py-1 bg-[#072929] shadow-md">
      <!-- Logo Section -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" class="w-24 h-auto" />
      </div>
  
      <!-- Menu Section -->
      <div class="menu flex gap-8">
        <router-link to="#home" class="text-stone-300 text-lg">Home</router-link>
        <router-link to="#features" class="text-stone-300 text-lg">Features</router-link>
        <router-link to="#Pricing" class="text-stone-300 text-lg">Pricing</router-link>
        <router-link to="#Testimonials" class="text-stone-300 text-lg">Testimonials</router-link>
          <router-link to="#features" class="text-stone-300 text-lg">About Us</router-link>

      </div>
  
      <!-- Buttons Section -->
      <div class="btns flex gap-4">
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
  /* No custom styles are needed as we are using Tailwind classes */
  </style>
  