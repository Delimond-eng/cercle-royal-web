//auth pages
import login from "@/components/pages/auth/login.vue";
import register from "@/components/pages/auth/register.vue";


//public pages
import home from "@/components/home_component.vue";
//home childrens
import welcomeArea from "@/components/pages/public/widgets/welcome_area.vue";
import creatingOfferPage from "@/components/pages/public/pages/creating_offer_page.vue";
import assignOfferPage from "@/components/pages/public/pages/assign_offer_page.vue";
import configOfferPage from "@/components/pages/public/pages/config_remise_on_offer_page.vue";
import creatingShopPage from "@/components/pages/public/pages/creating_shop_page.vue";

const routes = [{
        path: "/",
        name: "home",
        component: home,
        children: [{
                path: "",
                name: "welcome-area",
                component: welcomeArea
            },
            {
                path: "/create/offer",
                component: creatingOfferPage,
                name: 'create-offer',
            },
            {
                path: "/assign/offer",
                component: assignOfferPage,
                name: "assign-offer"
            },
            {
                path: "/config/offer",
                component: configOfferPage,
                name: "config-offer"
            },
            {
                path: "/create/shop",
                component: creatingShopPage,
                name: "create-shop"
            }

        ]
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