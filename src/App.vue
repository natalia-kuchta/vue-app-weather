<template>
      <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
      <RouterView />
      <SiteNavigation/>
    </div>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNavigation from "@/components/SiteNavigation.vue";
</script>





<style lang="scss" scoped>

</style>
