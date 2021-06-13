<template>
  <v-list
    expand
    nav
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(item, i) in items">
      <default-list-item
        :key="`item-${i}`"
        :item="item"
        @click="goTo(item.to)"
      />
    </template>
  </v-list>
</template>

<script>
  export default {
    name: 'DefaultList',

    components: {
      DefaultListItem: () => import('./ListItem'),
    },

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
     methods: {
      goTo(url) {
        console.log('clicked')
        this.$router.push(`/${url}`)
      }
    },
  }
</script>
