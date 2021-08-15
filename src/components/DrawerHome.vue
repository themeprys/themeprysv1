<template>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="prys_drawerhome"
    >
      <q-list class="q-pt-xl drawerlink">
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Index</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable to="/about">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
            <q-item-label caption>My Profile</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable to="/portfolio">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Portfolio</q-item-label>
            <q-item-label caption>Selected Projects</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/poem">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Poems</q-item-label>
            <q-item-label caption>Code is Poetry</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/tech">
          <q-item-section avatar>
            <q-icon name="http" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tech</q-item-label>
            <q-item-label caption>Tuts and Writings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/others">
          <q-item-section avatar>
            <q-icon name="call_split" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Others</q-item-label>
            <q-item-label caption>Everything in beetween</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/contact">
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
            <q-item-label caption>Get in touch</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>
</template>

<script>
export default {

  data () {
    return {
      leftDrawerOpen: false
    }
  },
}
</script>

<style>

</style>
