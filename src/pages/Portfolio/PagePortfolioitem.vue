<template>
    <q-page>
        <div class="prys_pagecontent row q-pt-lg q-pb-xl q-px-lg">
            <div class="col-md-8 col-xs-12 q-gutter-sm text-grey">
                <q-breadcrumbs gutter="xs">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="Portfolio" to="/portfolio" />
                    <q-breadcrumbs-el :label="portoItem.title" />
                </q-breadcrumbs>
            </div>
            <div class="col-md-10 col-xs-12 pagetitle" v-if="portoItem">
                <div class="row flex q-pt-lg">
                    <div class="col-md-7 col-xs-12 q-pt-md">
                        <q-img v-bind:src="'https://api.pryspry.com' + portoItem.cover.url">
                        </q-img>
                    </div>
                    <div class="col-md-5 q-pl-lg">
                        <h1 class="prys_projecttitle">{{ portoItem.title }}</h1>
                        <p class="text-grey q-pb-xs">{{ portoItem.subtitle }}</p>
                        <q-item clickable tag="a" target="_blank" :href="portoItem.URL">
                            <q-item-section avatar>
                                <q-icon color="grey" name="public" size="60px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label class="text-grey">VISIT SITE</q-item-label>
                                <q-item-label caption class="text-grey">{{portoItem.URL}}</q-item-label>
                            </q-item-section>
                        </q-item>
    
    
                        <!-- <q-card>
                                            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
                                                <q-tab name="mails" label="Visit Site" />
                                                <q-tab name="alarms" label="Alarms" />
                                                <q-tab name="movies" label="Movies" />
                                            </q-tabs>
                    
                    
                                            <q-tab-panels v-model="tab" animated>
                                                <q-tab-panel name="mails">
                                                    <p>Click this button below to visit site<br> {{ portoItem.URL }}</p>
                                                    <q-btn color="red" icon-right="send" label="Go To Site" :to='portoItem.URL' />
                                                </q-tab-panel>
                    
                                                <q-tab-panel name="alarms">
                                                    <div class="text-h6">Alarms</div>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </q-tab-panel>
                    
                                                <q-tab-panel name="movies">
                                                    <div class="text-h6">Movies</div>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </q-tab-panel>
                                            </q-tab-panels>
                                        </q-card> -->
    
                    </div>
                </div>
    
            </div>
    
        </div>
    </q-page>
</template>

<script>
import axios from 'axios'
import { openURL } from 'quasar'


export default {
    meta() {
        return {
            title: this.portoItem.title,
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
            portoItem: '',
            tab: 'mails'

        }
    },
    async mounted() {
        let uri = "https://api.pryspry.com/portfolios/" + this.$route.params.id;
        axios.get(uri).then(response => {
            this.portoItem = response.data
        })
    },
    methods: {
        openURL
    }
}
</script>

<style>
.prys_projecttitle {
    margin-bottom: 5px;
}
</style>
