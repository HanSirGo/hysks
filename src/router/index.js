import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {path:"",name:"homeindex",component:()=>import("@/views/pages/HomeIndex.vue")},
      {path:"2-1",name:"title",component:()=>import("@/views/pages/TitleView.vue")},
      {path:"2-2",name:"router",component:()=>import("@/views/pages/RouterView.vue")},
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/LoginView.vue")
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
  }else{
    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
  }
})
export default router;
