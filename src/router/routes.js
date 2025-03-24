// router/routes.js
import App from '@/components/Hero.vue';
import PpiIium from '@/components/PPI-IIUM.vue';
import PenaKita from '@/components/Pena-Kita.vue';
import InfoKuliah from '@/components/Info-Kuliah.vue';
import Kontak from '@/components/Kontak.vue';
import All from '@/components/All-Article.vue'
import Login from '@/components/Login.vue';
import Submit from '@/components/Submit.vue';

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
    beforeEnter: (to, from, next) => {
      // Log cookies to see if they are present
      console.log("Cookies:", document.cookie);
    
      // Get the JWT from cookies
      const jwtCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth='))
        ?.split('=')[1]; // Extract the JWT
    
      if (jwtCookie) {
        // If the cookie is found, proceed to the protected route
        next();
      } else {
        // If there's no JWT cookie, redirect to login or another route
        console.log('no cookie dumbass');
        next('/login');
      }
    }
  },
];

export default routes;
