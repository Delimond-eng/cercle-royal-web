//auth pages
import login from "@/components/pages/auth/login.vue";
import register from "@/components/pages/auth/register.vue";


//public pages
import home from "@/components/home_component.vue";

const routes = [{
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    }
];
export default routes;