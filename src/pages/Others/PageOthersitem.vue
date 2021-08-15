<template>
    <q-page>
        <div class="prys_pagecontent row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="Others" to="/others" />
                    <q-breadcrumbs-el :label="othersItem.title" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-8 col-xs-12 pagetitle">
                <h1 v-if="othersItem">{{ othersItem.title }}</h1>
            </div>
            <div class="body col-md-8 col-xs-12" v-if="othersItem">
                <q-markdown>{{ othersItem.body }}</q-markdown>
            </div>
        </div>
    
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
    meta() {
        return {
            title: this.othersItem.title,
            titleTemplate: title => `${title} - Full Stack Developer based in Jakarta`,
            meta: {
                description: { name: 'description', content: 'Pry S full stack developer based in Jakarta, Indonesia' },
                keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
                equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
            }
        }
    },
    data() {
        return {
            othersItem: ''
        }
    },
    async mounted() {
        let uri = "https://api.pryspry.com/blogs/" + this.$route.params.id;
        axios.get(uri).then(response => {
            this.othersItem = response.data
        })
    }
}
</script>

<style>

</style>
