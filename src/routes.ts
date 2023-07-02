import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const Dnd = lazy(() => import('@/pages/Dnd'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/dnd',
        component: Dnd,
      },
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
