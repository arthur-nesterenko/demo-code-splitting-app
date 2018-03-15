import asyncPage from './../lib/async-page'

const DEFAULT_DELAY = 300;



const HomePage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "home-page" */'./home'),
    injectService: () => import(/* webpackChunkName: "home-service" */'./home/service'),
    delay: DEFAULT_DELAY
});


const ReviewsPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "review-page" */'./reviews'),
    injectService: () => import(/* webpackChunkName: "review-service" */'./reviews/service'),
    delay: DEFAULT_DELAY
})

const OverivewPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "overview-page" */'./overview'),
    injectService: () => import(/* webpackChunkName: "overview-service" */'./overview/service'),
    delay: DEFAULT_DELAY
})

const BooksPage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "book-page" */'./books'),
    injectService: () => import(/* webpackChunkName: "book-service" */'./books/service'),
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
    },
    {
        path: '/books/:list',
        component: BooksPage,
        exact: true,
    }

]


export default routes;