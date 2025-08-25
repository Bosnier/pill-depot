<script setup lang="ts"></script>

<template>
  <RouterLink to="/meds">{{ $t('tabs.meds') }}</RouterLink>
  <RouterLink to="/notifications">{{ $t('tabs.notifications') }}</RouterLink>
  <RouterLink to="/settings">{{ $t('tabs.settings') }}</RouterLink>
  <RouterView />
</template>
