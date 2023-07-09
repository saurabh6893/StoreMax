import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import HomeScreen from './Screens/HomeScreen.tsx'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index={true} path='/' element={<HomeScreen />} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
