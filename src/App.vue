<template>
  <div id="app">

    <!-- Header -->
    <TheHeader />

    <!-- Main -->
    <TheMain />

    <!-- Footer -->
    <TheFooter />

  </div>
</template>

<script>

// Import
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

// Export
export default {

  // Name
  name: 'App',

  // Components
  components: { TheHeader, TheMain, TheFooter },

}
</script>

<style lang="scss">


</style>
