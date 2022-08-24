import {createRouter, createWebHistory} from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Login from '.././components/LoginPage.vue'
import Registration from '.././components/RegistrationPage.vue'
import Home from '@/components/HomePage'
import PredlagalnikIger from '@/components/PredlagalnikIger'
import DogodkiPregled from '@/components/DogodkiPregled'
import IgrePregled from "@/components/IgreDodane"
import IgraPodatki from "@/components/IgraPodatki"
import DogodekPodatki from "@/components/DogodekPodatki"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home},
    { path: '/login', name: 'login', component: Login },
    { path: '/registration',name: 'registration', component: Registration },
    { path: '/predlagalnik',name: 'predlagalnik', component: PredlagalnikIger },
    { path: '/dogodki',name: 'dogodki', component: DogodkiPregled },
    { path: '/igre',name: 'igre', component: IgrePregled },
    { path: '/dogodki/:dogodekId',name: 'dogodek', component: DogodekPodatki,  props: true },
    { path: '/igre/:igraId',name: 'igra', component: IgraPodatki, props: true}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    routes, // short for `routes: routes`
    mode: history,
    history: createWebHistory()
})
/*
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/registration'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});*/
export default router;