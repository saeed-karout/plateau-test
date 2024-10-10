<template>
  <footer class="bg-[#0D1117] text-white py-10">
    <div class="container mx-auto px-6 md:px-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

        <!-- First Column: Logo and Contact Info -->
        <div>
          <div class="mb-4">
            <img src="../../assets/logo.svg" alt="Logo" class="w-20 mb-2">
            <p class="text-xl">Let's Talk with Us</p>
            <a href="mailto:info@plateau.com" class="text-2xl font-bold">info@plateau.media</a>
          </div>
        </div>

        <!-- Second Column: Quick Links -->
        <div>
          <h4 class="font-bold text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-gray-400">Home</a></li>
            <li><a href="#" class="hover:text-gray-400">About Us</a></li>
            <li><a href="#" class="hover:text-gray-400">Our Works</a></li>
            <li><a href="#" class="hover:text-gray-400">Services</a></li>
          </ul>
        </div>

        <!-- Third Column: Contact Us -->
        <div>
          <h4 class="font-bold text-lg mb-4">Contact Us</h4>
          <p class="text-sm">
            Saudi Arabia, Riyadh, Al Rawdah District, Abu Al Darda Street
          </p>
          <p class="mt-2 text-sm">info@plateau.media</p>
          <p class="text-sm">(+961) 123456789</p>
        </div>

        <!-- Fourth Column: Newsletter -->
        <div>
          <h4 class="font-bold text-lg mb-4">News Letter</h4>
          <p class="text-sm mb-4">
            Subscribe for our upcoming latest articles and resources.
          </p>
          <!-- Input field with icon inside -->
          <form action="#" class="flex">
            <div class="relative w-full">
              <!-- Icon inside input -->
              <span class="absolute inset-y-0 left-0 flex items-center text-black pl-3 opacity-50">
                <font-awesome-icon :icon="['far', 'envelope']" />
              </span>

              <!-- Input field with placeholder -->
              <input type="email" placeholder="Your Email"
                class="w-full pl-10 p-2 bg-white border border-gray-500 focus:outline-none text-sm placeholder-gray-400 text-black">
            </div>

            <!-- Submit Button -->
            <button type="submit" class="bg-red-500 p-2 ml-2 text-white">
              <font-awesome-icon :icon="['far', 'paper-plane']" />
            </button>
          </form>

        </div>
      </div>

      <!-- Divider -->
      <hr class="my-8 border-gray-700">

      <!-- Bottom Row: Social Media Links and Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
  <!-- Copyright -->
  <p class="text-sm text-gray-500">
    &copy; Copyrights 2024
    <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EB2952] to-[#0D1438]">PLATEAU</span>
    . All rights reserved.
  </p>

  <!-- Powered by section -->
  <span class="flex gap-1 text-sm text-gray-500 dark:text-gray-300">
    Powered by
    <a href="https://www.instagram.com/snc.ltd?igsh=ODEwODVmeXhwdGh6" target="_blank"
        class="gradient-text flex items-center">
        Plateau
        <img src="/src/assets/logo.svg" width="22px" alt="">
    </a>
  </span>

  <!-- Social Media Links -->
  <div class="space-x-4 text-xs text-red-500">
    <a href="#" class="hover:text-gray-400">Facebook</a>
    <a href="#" class="hover:text-gray-400">Whatsapp</a>
    <a href="#" class="hover:text-gray-400">Instagram</a>
    <a href="#" class="hover:text-gray-400">LinkedIn</a>
  </div>
</div>

    </div>
  </footer>
</template>

<script setup>
// No additional script is needed as this is a static layout.
</script>

<style scoped>
/* Custom styles can go here if needed */
</style>
