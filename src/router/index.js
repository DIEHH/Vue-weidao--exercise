import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/page/Index'
import Classify from '@/page/Classify'
import Cart from '@/page/Cart'
import Mine from '@/page/Mine'
import Login from '@/page/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path : '/',
    	name : 'Index',
    	component : Index
    },
    {
    	path : '/classify',
    	name : 'classify',
    	component : Classify
    },
    {
    	path : '/cart',
    	name : 'Cart',
    	component : Cart
    },
    {
    	path : '/mine',
    	name : 'Mine',
    	component : Mine
    },
    {
        path : '/login',
        name : 'Login',
        component : Login
    }
  ]
})
