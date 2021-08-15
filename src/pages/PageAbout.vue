<template>
    <q-page>
        <div class="prys_pagecontent about row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="About Me" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-8 col-xs-12 " v-if="staticPage">
                <h1><q-icon name="record_voice_over" size="35px"></q-icon> {{ staticPage.title }}</h1>
            </div>
            <div class="body col-md-8 col-xs-12">
                <q-markdown v-if="staticPage">{{ staticPage.body }}</q-markdown>
            </div>
        </div>
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            staticPage: {}
        }
    },
    meta: {
        title: "About Pry S.",
        titleTemplate: title => `${title} - Full Stack Developer based in Jakarta`,
        meta: {
            description: { name: 'description', content: 'Pry S full stack developer based in Jakarta, Indonesia' },
            keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
            equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
        }
    },

    async mounted() {
        const response = await axios.get('https://api.pryspry.com/pages/1')
        this.staticPage = response.data
    }
}
</script>

<style>

</style>
