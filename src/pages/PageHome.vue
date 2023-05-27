<template>
    <q-page class="prys_homepage flex">
        <div class="row q-pb-xl q-px-lg">
            <div class="col-md-7 hero">
                <h1>Priyono Santosa</h1>
                <h3 class="q-pb-lg">Hi, I’m a Full Stack Developer based in Jakarta, Indonesia</h3>
                <p>Experienced as a senior web developer and system administrator for various clients, startups, companies and non-profit organization in Indonesia, Malaysia, Singapore, Hongkong and more.</p>
                <p>Strong multidisipliner background and highly skilled in content creation, UI/UX design, CMS development, search engine optimization, digital campaign, data visualization, etc by developing a wide range of technologies across multiple frameworks, software, operating systems & programming language.</p>
                <p>At the moment, I work at Leverate Group as Web Development Director.</p>
                <!-- <p><strong>KEY SKILLS</strong></p>
                <p>&bull; Design &amp; Content Strategy<br />&bull; Web Development and Maintenance<br />&bull; UI/UX Frontend Development<br />&bull; System Administrator/ Dev Ops<br />&bull; Search Engine Optimization<br />&bull; Digital Campaign/ Marketing<br
                    />&bull; Data Visualization/ Data Science</p>
                <p><strong>TECHNICAL SKILLS</strong></p>
                <p>&bull; Operating System: Linux, Windows, Mac<br />&bull; Web Server: Apache, Nginx, Centos, NodeJs<br />&bull; Database: MysQl, GraphQl, Firebase<br />&bull; Programming: HTML5/CSS, Javascript, PHP, R Language<br />&bull; Frameworks: CodeIgniter,
                    Laravel, ReactJs/ NextJs, VueJs/ NuxtJs, Quasar Framework, Ionic Framework<br />&bull; Server/ Hosting: WHMCS, WHM, cPanel, Webmin<br />&bull; Content Management System: WordPress, Drupal, Joomla, Magento<br />&bull; Cloud Platform: Google
                    Cloud Platform, AWS, Digital Ocean, Vultr<br />&bull; Version Control System: Github, Bitbucket, Gitkraken<br />&bull; Google Products: Analytics, Tag Manager, Adsense, Search Console<br />&bull; Social Media Tools: Hootsuite, IFTTT, Buffer<br
                    />&bull; Data Science: R Studio<br />&bull; Multimedia Editing: Kdenlive, Audacity<br />&bull; Graphic Design: GIMP, InkScape, Adobe Photoshop, InDesign, Illustrator, CorelDraw</p>
                <p>At the moment, I work at Leverate Media Asia as a Director of Web Development</p> -->
                <div class="q-py-lg q-mb-lg q-gutter-md">
                    <q-btn color="white" icon="search" text-color="black" label="Browse Portfolio" to="/portfolio" />
                    <q-btn color="primary" @click="downloadResume()" label="Download Resume" />
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
    meta: {
        title: "Priyono Santosa",
        titleTemplate: title => `${title} - Full Stack Developer & Digital Media Professional`,
        description: { name: 'description', content: 'Priyo S. full stack developer based in Jakarta, Indonesia' },
        keywords: { name: 'keywords', content: 'Full Stack Developer, Jakarta, Indonesia' },
        equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    },
    methods: {
        downloadResume() {
            axios({
                url: 'https://themeprys/Curriculum_Vitae_Priyono_Santosa_Updated_2023.pdf',
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'Priyono_Santosa_Resume_2023.pdf');
                document.body.appendChild(fileLink);

                fileLink.click();
            });
        }
    }
}
</script>

<style>

</style>
