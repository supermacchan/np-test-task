import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";

const LocateShipping = lazy(() => import('../pages/LocateShipping/LocateShipping'));
const PostOfficeList = lazy(() => import('../pages/PostOfficeList/PostOfficeList'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LocateShipping />} />
            <Route path='offices' element={<PostOfficeList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}