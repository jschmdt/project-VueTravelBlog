import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyHome',
      components: {
        default: () => import('@/views/HomeView.vue'),
      },
    },
    {
      path: '/contact',
      name: 'TheContact',
      components: {
        default: () => import('@/views/ContactView.vue'),
      },
    },
    {
      path: '/add',
      name: 'FormAdd',
      props: true,
      components: {
        default: () => import('@/components/FormAdd.vue'),
      },
    },
    {
      path: '/edit',
      name: 'FormEdit',
      props: true,
      components: {
        default: () => import('@/components/FormEdit.vue'),
      },
    },
    {
      path: '/destinations/:id',
      name: 'CityDetail',
      props: true,
      components: {
        default: () => import('@/components/CityDetail.vue'),
      },
    },
    {
      path: '/:catchAll(.*)',
      components: { default: () => import('@/components/404/NotFound.vue') },
    },
  ],
})

export default router
