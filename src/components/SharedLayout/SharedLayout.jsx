import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'shared/components/Loader/Loader';

//повторяющиеся на всех страницах компоненты
export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />        
      </Suspense>
      <footer>Copyright 2022 &copy;</footer>
    </>
  );
}