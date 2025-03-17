import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js'; // Import routes

const router = createRouter({
  history: createWebHistory(), // Use HTML5 History Mode
  routes,
});

export default router;