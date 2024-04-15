import './App.css';
import React from 'react';
import Root from './Root/Root';
import Home from './components/Home/Home';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route path='' element={<Home />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
