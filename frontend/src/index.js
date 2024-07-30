import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home';
import ContactUs from './components/pages/contactUs';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/pages/about';
import Login from './components/pages/Login';
import store from './store/store';
import { Provider } from 'react-redux';
import Signup from './components/pages/Signup';
import ProductForm from './components/pages/ProductFormPage';
import BuyNowPage from './components/pages/BuyNowPage';
import ShoppingCart from './components/pages/ShoppingCart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<Layout />}>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/ContactUs' element = {<ContactUs />}></Route>
      <Route path = '/About' element = {<About />}></Route>
      <Route path = '/Login' element = {<Login />}></Route>
      <Route path = '/Signup' element = {<Signup />}></Route>
      <Route path = '/ProductForm' element = {<ProductForm />}></Route>
      <Route path = '/product/:id' element = {<BuyNowPage />}></Route>
      <Route path = '/ShoppingCart' element = {<ShoppingCart />}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <RouterProvider router = {router} />
 </Provider>
);
