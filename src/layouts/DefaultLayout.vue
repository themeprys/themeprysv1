<template>
  <q-layout view="lHh Lpr lFf" class="prys_homepage">
    <DrawerHome />

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
    <div class="mobile-only fixed-top-right">
      <q-btn
        class="q-pt-md"
      color="white"
      flat
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit' : ''"
    />
    </div>

  </q-layout>
</template>

<script>
import DrawerHome from 'components/DrawerHome'
import Footer from 'components/Footer'

export default {
  name: 'MyLayout',
  components: {
      DrawerHome,
      Footer
  }
}
</script>

<style>
</style>
