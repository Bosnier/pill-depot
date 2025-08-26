<script setup lang="ts">
import { Bolt, Cross, PillBottle } from 'lucide-vue-next'
</script>

<template>
  <RouterView class="grow" />
  <div class="nav">
    <div class="nav-controls"></div>
    <nav class="nav-tabs">
      <RouterLink to="/meds"><Cross />{{ $t('tabs.meds') }}</RouterLink>
      <RouterLink to="/notifications"><PillBottle />{{ $t('tabs.notifications') }}</RouterLink>
      <RouterLink to="/settings"><Bolt />{{ $t('tabs.settings') }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
@reference '@/assets/main.css';

.nav {
  @apply sticky bottom-0 grid h-fit;
  @apply md:bottom-2 md:mx-auto md:mt-2 md:w-lg md:max-w-dvw md:rounded-lg md:shadow-md;
  @apply bg-stone-200 text-stone-500 shadow-stone-400/60 dark:bg-stone-800 dark:text-stone-400 dark:shadow-stone-950/60;
}

.nav-controls {
  @apply has-[*]:border-b;
  @apply border-stone-400 dark:border-stone-600;
}

.nav-tabs {
  @apply grid h-16 grid-cols-3;

  & > a {
    @apply flex flex-col items-center justify-center gap-0.5 transition-colors;

    &.router-link-active {
      @apply text-black dark:text-stone-50;
    }
  }
}
</style>
