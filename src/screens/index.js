import asyncPage from './../lib/async-page'

const DEFAULT_DELAY = 300;



const HomePage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "home-page" */'./home'),
    injectService: () => import(/* webpackChunkName: "home-service" */'./home/service'),
    delay: DEFAULT_DELAY
});


const ReviewsPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "post-page" */'./reviews'),
    injectService: () => import(/* webpackChunkName: "post-service" */'./reviews/service'),
    delay: DEFAULT_DELAY
})

const OverivewPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "post-page" */'./overview'),
    injectService: () => import(/* webpackChunkName: "post-service" */'./overview/service'),
    delay: DEFAULT_DELAY
})


const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/reviews/:author',
        component: ReviewsPage,
        exact: true,

    },
    {
        path: '/overview/:date?',
        component: OverivewPage,
        exact: true,

    }

]


export default routes;