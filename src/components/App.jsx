import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";

import LocateShipping from "../pages/LocateShipping/LocateShipping";
import PostOfficeList from "../pages/PostOfficeList/PostOfficeList";

export const App = () => {
  return (
    <>
      {/* temporary adding the components here to have a visual
      will add routing later*/}
      <Layout />
      <LocateShipping />
      <PostOfficeList />
    </>
  );
}