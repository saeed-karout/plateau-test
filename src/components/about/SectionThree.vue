<script setup >
import project1Img from '@/components/about/projects/1.png';
import project2Img from '@/components/about/projects/2.png';
import project3Img from '@/components/about/projects/3.png';
import project4Img from '@/components/about/projects/4.png';
import project5Img from '@/components/about/projects/5.png';

import bgImage1 from '@/components/about/projects/bg/1.png';
import bgImage2 from '@/components/about/projects/bg/2.png';

const projects = [
  {
    title: 'Ask Engineering Services',
    categories: ['Social Media', 'Branding'],
    image: project1Img,
    alignment: 'left'
  },
  {
    title: 'Go Fix Homefix Services',
    categories: ['UI/UX', 'Branding', 'Social Media'],
    image: project2Img,
    alignment: 'right'
  },
  {
    title: 'LTS Car Rental Services',
    categories: ['Social Media', 'Branding'],
    image: project3Img,
    alignment: 'left'
  },
  {
    title: 'S.N.C Contracts',
    categories: ['UI/UX', 'Branding', 'Social Media'],
    image: project4Img,
    alignment: 'right'
  },
  {
    title: 'Mithra Travel & Tourism',
    categories: ['Social Media', 'Branding'],
    image: project5Img,
    alignment: 'left'
  }
];
</script>

<template>
  <section class="relative flex flex-col justify-center items-center min-h-screen px-4 py-20 overflow-hidden bg-[#0d1438]">
    <!-- Background Images -->
    <div class="absolute w-full h-full top-0">
      <img :src="bgImage1" alt="Background Image 1" class="absolute top-0 right-0 w-1/2 h-1/2 object-cover" />
      <img :src="bgImage2" alt="Background Image 2" class="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover" />
    </div>

    <!-- Section Content -->
    <h2 class="uppercase sm:text-5xl lg:text-8xl text-white font-extrabold mb-16 relative z-10">
      Projects
    </h2>

    <div class="w-full max-w-6xl flex flex-col gap-16 relative z-10">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :class="{'flex-row': project.alignment === 'left', 'flex-row-reverse': project.alignment === 'right'}"
        class="flex gap-8 items-center"
      >
        <!-- Project Image -->
        <img
          :src="project.image"
          :alt="project.title + ' Image'"
          class="w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />

        <!-- Project Info -->
        <div class="w-1/2 flex flex-col items-start text-left relative">
          <div
            class="absolute -left-8 top-0 text-vertical text-pink-500 uppercase text-pink text-xl font-bold tracking-wide"
            :class="{'-right-20 text-right': project.alignment === 'right', '-left-20 text-center': project.alignment === 'left'}"
          >
            <div v-for="(category, idx) in project.categories" :key="idx" class="mb-2">
              {{ category }}
            </div>
          </div>
          <h3 class="text-4xl font-bold text-white ml-16">
            {{ project.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-vertical {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-orientation: mixed;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
