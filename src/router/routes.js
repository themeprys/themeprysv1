const routes = [{
        path: '/',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/PageHome.vue')
        }]
    },
    {
        path: '/about',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/PageAbout.vue')
        }]
    },
    {
        path: '/poem',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Poem/PagePoem.vue')
            },
            {
                path: ':id',
                component: () =>
                    import ('pages/Poem/PagePoemitem.vue')
            }
        ]
    },
    {
        path: '/tech',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Tech/PageTech.vue')
            },
            {
                path: ':id',
                component: () =>
                    import ('pages/Tech/PageTechitem.vue')
            }
        ]
    },
    {
        path: '/others',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Others/PageOthers.vue')
            },
            {
                path: ':id',
                component: () =>
                    import ('pages/Others/PageOthersitem.vue')
            }
        ]
    },
    {
        path: '/portfolio',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Portfolio/PagePortfolio.vue')
            },
            {
                path: ':id',
                component: () =>
                    import ('pages/Portfolio/PagePortfolioitem.vue')
            }
        ]
    },
    {
        path: '/contact',
        component: () =>
            import ('layouts/DefaultLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/PageContact.vue')
        }]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes