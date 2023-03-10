import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const LocateShipping = lazy(() => import('../pages/LocateShipping/LocateShipping'));
const PostOfficeList = lazy(() => import('../pages/PostOfficeList/PostOfficeList'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      {/* temporary adding the components here to have a visual
      will add routing later*/}
      <Layout />
      <Home />
      <LocateShipping />
      <PostOfficeList />
      <NotFound />
    </>
  );
}