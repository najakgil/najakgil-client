import { createBrowserRouter } from 'react-router-dom';
import Layout from '../common/layout/layout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Redirect from '../pages/redirect/redirect';
import HomePage from '../pages/HomePage/HomePage';
import MakePage from '../pages/MakePage/MakePage';
import PreviewPage from '../pages/PreviewPage/PreviewPage';
import StoragePage from '../pages/StoragePage/StoragePage';
import GoodsPage from '../pages/GoodsPage/GoodsPage';
import GoodsDetail from '../pages/GoodsPage/goods-detail';
import EventPage from '../pages/EventPage/EventPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/redirect',
        element: <Redirect />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/make',
        element: <MakePage />,
      },
      {
        path: '/preview',
        element: <PreviewPage />,
      },
      {
        path: '/storage',
        element: <StoragePage />,
      },
      {
        path: '/goods',
        element: <GoodsPage />,
      },
      {
        path: '/goodsDetail/:id',
        element: <GoodsDetail />,
      },
      {
        path: '/event',
        element: <EventPage />,
      },
    ],
  },
]);
