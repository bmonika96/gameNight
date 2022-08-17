import {createRouter, createWebHistory} from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Login from '.././components/LoginPage.vue'
import Registration from '.././components/RegistrationPage.vue'
import HelloWorld from "@/components/HelloWorld";
import Home from '@/components/HomePage'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: HelloWorld},
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/domov', component: Home },
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
export default router;