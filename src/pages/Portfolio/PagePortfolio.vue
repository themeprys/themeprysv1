<template>
    <q-page>
        <div class="prys_pagecontent row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="Portfolio" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-8 col-xs-12 pagetitle">
                <h1>
                    <q-icon name="star" size="35px"></q-icon> Portfolio</h1>
            </div>
            <div class="col-md-12 col-xs-12 pagetitle">
                <div class="row flex">
                    <div class="col-md-4 col-xs-12 q-pa-md" v-for="item in listPorto" :key="item.id">
                <router-link :to="/portfolio/ + item.id" class="title">
                        <q-card>
                            <q-img :ratio="1" position="0 0" v-bind:src="'https://api.pryspry.com' + item.cover.url">
                            </q-img>
                            <q-card-section class="bg-grey-9">
                                <div class="text-h6">{{ item.title }}</div>
                                <div class="text-subtitle2 ellipsis">{{ item.subtitle }}</div>
                            </q-card-section>
    
                            <!-- <q-card-section>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </q-card-section> -->
                        </q-card>
                </router-link>
                    </div>
    
                </div>
            </div>
        </div>
    
    
    
    
        <!-- <div class="col-md-8 col-xs-12" v-for="item in listTech" :key="item.id">
                                            <router-link :to="/tech/ + item.id" class="title">
                                                <div class="text-h5 q-pb-md"><i class="fas fa-chevron-right"></i> {{ item.title }}</div>
                                            </router-link>
                                        </div> -->
    
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
    meta: {
        title: "Portfolio",
        titleTemplate: title => `${title} - Full Stack Developer based in Jakarta`,
        meta: {
            description: { name: 'description', content: 'Pry S full stack developer based in Jakarta, Indonesia' },
            keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
            equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
        }
    },
    data() {
        return {
            listPorto: {}
        }
    },
    async mounted() {
        const response = await axios.get('https://api.pryspry.com/portfolios')
        this.listPorto = response.data
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
