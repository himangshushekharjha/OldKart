<template>
<v-app>
  <!-- <default-drawer>
    <template v-slot:main>
      <home-login />
    </template>
  </default-drawer> -->
  <home-login></home-login>
</v-app>
</template>

<script>


  export default {
    components: {  
      HomeLogin: () => import(
        /* webpackChunkName: "default-app-bar" */
        '../components/HomeLogin.vue'
      ),
      // DefaultDrawer: () => import(
      //   /* webpackChunkName: "default-drawer" */
      //   '../components/Drawer.vue'
      // ),
    }
  }
</script>
