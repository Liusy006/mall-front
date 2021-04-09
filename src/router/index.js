import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)
const Home = () => import('views/home/home')
const Cart = () => import('views/cart/cart')
const Category = () => import('views/category/category')
const Profile = () => import('views/profile/profile')


const routes = [
    {
        path: "",
        redirect: '/home'
    },
    {
        path:"/home",
        component: Home
    },
    {
        path:"/cart",
        component: Cart
    },
    {
        path:"/profile",
        component: Profile
    },
    {
        path: "/category",
        component: Category
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
