import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/BeautifulDnd'));
const Home = lazy(() => import('@/pages/Home'));
const Dnd = lazy(() => import('@/pages/Dnd'));
const DndKit = lazy(() => import('@/pages/DndKit'));
const GridLayout = lazy(() => import('@/pages/GridLayout'));
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
        path: '/dndKit',
        component: DndKit,
      },
      {
        path: '/gridLayout',
        component: GridLayout,
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
