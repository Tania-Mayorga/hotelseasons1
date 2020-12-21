import vueRouter from 'vue-router'
import Crear from './components/Crear'
import Presentacion from './components/Presentacion'
import Mostrar from './components/Mostrar'
import App from './App'
const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "presentacion",
            component: Presentacion
        },
        {
            path: '/crear',
            name: "crear",
            component: Crear
        },
        {
            path: '/temporadas',
            name: "mostrar",
            component: Mostrar
        },
        
    ]
})
export default router