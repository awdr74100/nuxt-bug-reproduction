<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const getUser = async () => {
  const data = await $fetch("/");
};
</script>
