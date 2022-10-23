import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { Application } from './categories/application';
import { BootMenu } from './categories/bootmenu';
import { DesktopEnvironment } from './categories/desktop_environment';
import { Kernel } from './categories/kernel';
import './App.css';
import { Welcome } from './categories/welcome';
import React from 'react';
import Logo from '@assets/images/logo.png';

const baseURL = '/app_window';

const categories = [
  {
    path: '/',
    element: Welcome,
    title: 'Welcome',
    key: 0,
    icon: '',
  },
  {
    path: 'application',
    element: Application,
    title: 'Application',
    key: 1,
    icon: '',
  },
  {
    path: 'kernel',
    element: Kernel,
    title: 'Kernel',
    key: 2,
    icon: '',
  },
  {
    path: 'desktop',
    element: DesktopEnvironment,
    title: 'Desktop Environment',
    key: 3,
    icon: '',
  },
  {
    path: 'boot',
    element: BootMenu,
    title: 'Boot Menu',
    key: 4,
    icon: '',
  },
];

const Layout = () => {
  return (
    <>
      <div className="App">
        <div className="Left">
          <div className="Logo">
            <img className="LogoImg" src={Logo} />
            <div className="Title">Deepin Tweak</div>
          </div>
          <div className="Category">
            {categories.map(item => {
              return (
                <Link
                  to={`${baseURL}/${item.path}`}
                  key={item.key}
                  className="Link">
                  <img src={item.icon} />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={baseURL} element={<Layout />}>
          <Route index element={<Welcome />} />
          {categories
            .filter(item => item.key > 0)
            .map(item => {
              return (
                <Route
                  path={item.path}
                  key={item.key}
                  element={<item.element />}
                />
              );
            })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
