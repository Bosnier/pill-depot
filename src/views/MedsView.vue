<script setup lang="ts">
import { ArrowDownWideNarrow, Plus, Search } from 'lucide-vue-next'
</script>

<template>
  <div
    v-bind="$attrs"
    class="grid auto-rows-min content-end gap-1 p-1 md:grid-cols-2 lg:grid-cols-3 xl:container xl:mx-auto"
  >
    <div v-for="i in 400" :key="i" class="medicine">
      <span class="medicine__id">{{ i }}</span>
      <span class="medicine__name">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
      <span class="medicine__exp">until Aug 2028</span>
    </div>
  </div>
  <Teleport to=".nav-controls">
    <div class="flex h-10 px-4 md:px-1">
      <button class="flex size-10 items-center justify-center"><Search /></button>
      <button class="flex size-10 items-center justify-center"><Plus /></button>
      <button class="ms-auto flex size-10 items-center justify-center"><ArrowDownWideNarrow /></button>
      <select class="">
        <option value="" selected>Created at</option>
        <option value="">Expired at</option>
        <option value="">Name</option>
        <option value="">ID</option>
      </select>
    </div>
  </Teleport>
</template>

<style scoped>
@reference '@/assets/main.css';

.medicine {
  @apply grid rounded-md p-0.5;
  @apply bg-stone-100 dark:bg-stone-900;
  grid-template:
    'id name' 1lh
    'id exp' 1lh / 2lh 1fr;
}

.medicine__id {
  @apply place-self-center font-mono text-lg;
  grid-area: id;
}

.medicine__name {
  @apply line-clamp-1;
  grid-area: name;
}

.medicine__exp {
  @apply text-sm text-stone-400;
  grid-area: exp;
}
</style>
