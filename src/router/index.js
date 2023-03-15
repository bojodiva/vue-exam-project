
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Repos from "../pages/ReposPage.vue";
import Search from "../pages/SearchPage.vue";
import NotFound from "../pages/NotFound.vue";
import RepoItemPage from "../pages/RepoItemPage.vue"


const routes = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/repos",
      component: Repos,
     
    },
    {
       path: "/search",
       component: Search,
    },
    {
      path:"/repos/:reposId",
      component: RepoItemPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;