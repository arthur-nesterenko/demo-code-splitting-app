import asyncPage from './../lib/async-page'

const DEFAULT_DELAY = 300;



const HomePage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "home-page" */'./home'),
    service: () => import(/* webpackChunkName: "home-service" */'./home/service'),
    delay: DEFAULT_DELAY
});

const PostPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "post-page" */'./posts'),
    service: () => import(/* webpackChunkName: "post-service" */'./posts/service'),
    delay: DEFAULT_DELAY
})





const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/posts',
        component: PostPage,
        exact: true,

    }

]


export default routes;