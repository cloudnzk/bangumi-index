import Vue from "vue";
import VueRouter from 'vue-router'

// 动态导入路由组件（实例）

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Favorites = () => import('views/favorites/Favorites')

// 1.安装路由插件
Vue.use(VueRouter)

// 2.定义路由
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/favorites',
        component: Favorites
    }
]
// 3.创建路由对象

const router = new VueRouter({
    routes,
    // 前端项目用history模式，出现问题：
    // doesn't work properly without JavaScript enabled. Please enable it to continue.
    // mode: 'history',
})

export default router


