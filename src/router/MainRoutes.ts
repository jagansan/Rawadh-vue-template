const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    // {
    //   name: 'LandingPage',
    //   path: '/',
    //   component: () => import('@/views/dashboards/default/DefaultDashboard.vue')
    // },
    // {
    //   name: 'Login',
    //   path: '/',
    //   component: () => import('@/views/authentication/auth/LoginPage.vue')
    // },
    {
      name: 'Project',
      path: '/projects',
      component: () => import('@/views/pages/project/list/ProjectList.vue')
    },
    {
      name: 'Project Detail',
      path: '/project-detail',
      component: () => import('@/views/pages/project/detail/ProjectDetail.vue')
    },
  ]
};

export default MainRoutes;
