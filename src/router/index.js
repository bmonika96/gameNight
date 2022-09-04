import {createRouter, createWebHistory} from "vue-router";


import Login from '../components/PrijavaStran.vue'
import Registration from '../components/Registracija.vue'
import Home from '@/components/HomePage'
import PredlagalnikIger from '@/components/PredlagalnikIger'
import DogodkiPregled from '@/components/DogodkiPregled'
import IgrePregled from "@/components/IgreDodane"
import IgraPodatki from "@/components/IgraPodatki"
import DogodekPodatki from "@/components/DogodekPodatki"
import IgreDodaj from "@/components/IgreDodaj";
import DogodekDodaj from "@/components/DogodekDodaj";

const routes = [
    { path: '/', name: 'domov', component: Home, props: true},
    { path: '/login', name: 'login', component: Login },
    { path: '/registration',name: 'registration', component: Registration },
    { path: '/predlagalnik',name: 'predlagalnik', component: PredlagalnikIger },
    { path: '/dogodki',name: 'dogodki', component: DogodkiPregled },
    { path: '/dogodki/dodaj',name: 'dogodkiDodaj', component: DogodekDodaj },
    { path: '/igre',name: 'igre', component: IgrePregled },
    { path: '/igre/dodaj',name: 'igreDodaj', component: IgreDodaj },
    { path: '/dogodki/:dogodekId',name: 'dogodek', component: DogodekPodatki,  props: true },
    { path: '/igre/:igraId',name: 'igra', component: IgraPodatki, props: true}
]

const router = createRouter({
    
    routes, 
    mode: history,
    history: createWebHistory()
})
export default router;