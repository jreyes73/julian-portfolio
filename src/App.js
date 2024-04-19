import './App.css';
import React from 'react';
import Root from './Root/Root';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route path='' element={<Home />} />
    <Route path='skills' element={<Skills />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<Contact />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
