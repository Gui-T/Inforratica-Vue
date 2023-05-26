<script>
import NavbarComp from '@/components/NavbarComp.vue'
export default {
  components: {
    NavbarComp
  }
}
</script>
<template>
  <NavbarComp />
  <main>
    <RouterView />
  </main>
</template>
