// router/routes.js
import app from '@/components/Hero.vue';
import tentang from '@/components/PPI-IIUM.vue';
import pena from '@/components/Pena-Kita.vue';
import kuliah from '@/components/Info-Kuliah.vue';
import kontak from '@/components/Kontak.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: app,
  },
  {
    path: '/PPI-IIUM',
    name: 'PPI-IIUM',
    component: tentang,
  },
  {
    path: '/Pena-Kita',
    name: 'Pena-Kita',
    component: pena,
  },
  {
    path: '/Info-Kuliah',
    name: 'Info-Kuliah',
    component: kuliah,
  },
  {
    path: '/Kontak',
    name: 'Kontak',
    component: kontak,
  },
];

export default routes;
