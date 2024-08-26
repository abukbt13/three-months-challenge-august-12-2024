import AccordionHome from "@/views/Tutorials/Week1/AccordionHome.vue";
import Contact from "@/views/Tutorials/Week1/Contact.vue";
import LandingPage from "@/views/Tutorials/Week1/LandingPage.vue";
import ListApp from "@/views/Tutorials/Week1/ListApp.vue";
import CssDropdown from "@/views/Tutorials/Week1/CssDropdown.vue";
const routes =[
        {
            path: '/accordion',
            component: AccordionHome
        },
        {
            path: '/contact-us',
            component: Contact
        },
        {
            path: '/landing-page',
            component: LandingPage
        },
        {
            path: '/list-app',
            component: ListApp
        },
        {
            path: '/dropdown',
            component: CssDropdown
        },

]
export default routes