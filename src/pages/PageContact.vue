<template>
  <q-page>
        <div class="prys_pagecontent about row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el :label="staticPage.title" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-8 col-xs-12" v-if="staticPage">
                <h1><q-icon name="send" size="35px"></q-icon> {{ staticPage.title }}</h1>
            </div>
      <div class="body col-md-8 col-xs-12">
      <q-markdown v-if="staticPage">{{ staticPage.body }}</q-markdown>
      </div>
      <div class="col-xs-12 col-md-12 q-pt-md q-pb-xl">
      <iframe frameBorder="0" width="100%" height="400px" src="https://pryspry963932.typeform.com/c/jJmPu8?typeform-cui-avatar=https://images.typeform.com/images/B7MCjr2MgctC"></iframe> 
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  meta: {
    title: "Contact",
    titleTemplate: title => `${title} - Full Stack Developer based in Jakarta`,
    meta: {
      description: { name: 'description', content: 'Pry S full stack developer based in Jakarta, Indonesia' },
      keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  },
  data() {
    return {
      staticPage: {}
    }
  },
  async mounted() {
    const response = await axios.get('https://api.pryspry.com/pages/2')
    this.staticPage = response.data
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        done()
      }, 1000)
    }
  }
}


</script>

<style>
</style>
