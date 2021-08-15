<template>
    <q-page>
        <div class="prys_pagecontent row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="Tech" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-8 col-xs-12 pagetitle">
                <h1><q-icon name="http" size="35px"></q-icon> Tech</h1>
            </div>
    
            <div class="col-md-8 col-xs-12" v-for="item in listTech" :key="item.id">
                <router-link :to="/tech/ + item.id" class="title">
                    <div class="text-h5 q-pb-md"><i class="fas fa-chevron-right"></i> {{ item.title }}</div>
                </router-link>
            </div>
    
        </div>
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
    meta: {
        title: "Tech",
        titleTemplate: title => `${title} - Full Stack Developer based in Jakarta`,
        meta: {
            description: { name: 'description', content: 'Pry S full stack developer based in Jakarta, Indonesia' },
            keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
            equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
        }
    },
    data() {
        return {
            listTech: {}
        }
    },
    async mounted() {
        const response = await axios.get('https://api.pryspry.com/blogs?blogcategory=2')
        this.listTech = response.data
    },
    methods: {
        refresh(done) {
            setTimeout(() => {
                done()
            }, 1000)
        }
    }
}
</script>

<style>
a.title {
    color: #ccc;
    text-decoration: none;
}
</style>
