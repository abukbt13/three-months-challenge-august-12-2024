
import Portfolio from "@/views/Tutorials/Week3/Portfolio.vue";
import Week3Home from "@/views/Tutorials/Week3/Week3Home.vue";
const routes =[

    {
        path: '/week-3',
        component: Portfolio,
        children: [
            {
                path: '',
                component: Week3Home
            }
         ]
    }

]

export default routes