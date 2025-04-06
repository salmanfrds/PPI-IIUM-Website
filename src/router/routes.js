// router/routes.js
import App from '@/views/HomeLanding.vue';
import PpiIium from '@/views/PPI-IIUM.vue';
import PenaKita from '@/views/Pena-Kita.vue';
import InfoKuliah from '@/views/Info-Kuliah.vue';
import Kontak from '@/views/Kontak.vue';
import All from '@/components/All-Article.vue'
import Login from '@/views/Login.vue';
import Submit from '@/views/Submit.vue';
import Dashboard from '@/views/Dashboard.vue';
import Article from '@/views/Article.vue';
import PenaKastrat from '@/components/Pena-Kastrat.vue';
import Seboga from '@/components/Seboga.vue';
import RuangCerita from '@/components/Ruang-Cerita.vue';
import Edit from '@/views/Edit.vue';
import Litbang from '@/components/Litbang.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/ppi-iium',
    name: 'PpiIium',
    component: PpiIium,
  },
  {
    path: '/pena-kita',
    name: 'PenaKita',
    component: PenaKita,
    redirect: '/pena-kita/all',
    children: [
      {
        path: 'all', // This creates /pena-kita/all
        name: 'PenaKitaAll',
        component: All,
      },
      {
        path: 'pena-kastrat', // This creates /pena-kita/all
        name: 'PenaKastrat',
        component: PenaKastrat,
      },
      {
        path: 'seboga', // This creates /pena-kita/all
        name: 'Seboga',
        component: Seboga,
      },
      {
        path: 'cerita', // This creates /pena-kita/all
        name: 'RuangCerita',
        component: RuangCerita,
      },
      {
        path: 'litbang', // This creates /pena-kita/all
        name: 'Litbang',
        component: Litbang,
      },
    ],
  },
  {
    path: '/info-kuliah',
    name: 'InfoKuliah',
    component: InfoKuliah,
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit,
    beforeEnter: async (to, from, next) => {
      try {
        const response = await fetch("https://server.salmanfrds.com/auth/validate", {
          method: "GET",
          credentials: "include", // ✅ Important for sending cookies
        });
      
        if (response.ok) {
          next(); // ✅ Allow access
          console.log("success login");
        } else {
          console.log("User not authenticated, redirecting...");
          next("/dashboard"); // ❌ Redirect if not authenticated
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        next("/dashboard");
      }
    }    
  },
  {
    path: "/dashboard",
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: async (to, from, next) => {
      try {
        const response = await fetch("https://server.salmanfrds.com/auth/validate", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          next(); // ✅ Proceed to the dashboard
        } else {
          console.log("User not authenticated, redirecting...");
          next("/login"); // ❌ Redirect if not authenticated
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        next("/login");
      }
    },
  },
  {
    path: "/article/:id",
    name: 'Article',
    component: Article,
    props: true,
  },
  {
    path: "/edit/:id",
    name: 'Edit',
    component: Edit,
    props: true,
  },
];

export default routes;
