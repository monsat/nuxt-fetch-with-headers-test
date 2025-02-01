<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-4">
      <NuxtLink to="/">Home (no pass)</NuxtLink>
      ／
      <NuxtLink to="/pass">pass</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style>
.mb-4 {
  margin-bottom: 1rem;
}
</style>