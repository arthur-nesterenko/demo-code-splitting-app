// import HomePage from './home';
import PostPage from './posts';
import asyncPage from './../lib/async-page'



const HomePage = asyncPage({
    getCompnent: () => import(/* webpackChunkName: "home-page" */'./home')
});





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