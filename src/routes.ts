import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/BeautifulDnd'));
const Home = lazy(() => import('@/pages/Home'));
const Dnd = lazy(() => import('@/pages/Dnd'));
const BeautifulDnd = lazy(() => import('@/pages/BeautifulDnd'));
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
        path: '/beautifulDnd',
        component: BeautifulDnd,
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
