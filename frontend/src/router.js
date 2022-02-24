import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Pages/Home.vue'
import News from './components/Pages/News/News.vue'
import Blog from './components/Pages/Blog/Blog.vue'
import Forum from './components/Pages/Forum/Forum.vue'
import NewPost from './components/Pages/Forum/NewPost.vue'
import Focus from './components/Pages/Focus/Focus.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/ViMotiv/home'},
        {path: '/ViMotiv/home', component: Home},
        {path: '/ViMotiv/news', component: News},
        {path: '/ViMotiv/blog', component: Blog}, //will have a child
        {path: '/ViMotiv/forum', component: Forum},
        {path: '/ViMotiv/forum/newpost', component: NewPost},
        {path: '/ViMotiv/focus', component: Focus},
        {path: '/ViMotiv/contact', component: undefined},
        {path: '/ViMotiv/github', component: undefined},
    ]
})

export default router