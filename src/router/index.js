import { createWebHashHistory, createRouter } from "vue-router";
import CreateComponentVue from "@/components/CreateComponent.vue";
import EditComponenentVue from "@/components/EditComponent.vue";
import ListComponentVue from "@/components/ListComponent.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: CreateComponentVue,
    },
    {
        path: "/view",
        name: "view",
        component: ListComponentVue,
    },
    {
        path:"/edit/:id",
        name: "edit",
        component: EditComponenentVue,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;