<template>
<v-app>
  <default-drawer />
</v-app>
</template>
<script>
  

  export default {
    name: 'Home',

    components: {
      DefaultDrawer: () => import(
        /* webpackChunkName: "default-drawer" */
        '../components/Drawer.vue'
      ),
    },
  }
</script>
