import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Navbar from './mis_en_page/Navbar';
import Footer from './mis_en_page/Footer';
import Main from './mis_en_page/Main';
import PageAccueil from './Pages/PageAccueil';
import ErreurPageNotFound from './Pages/ErreurPageNotFound';
import PageApropos from './Pages/PageApropos';

 /*HeaderFooterLayout permet de renseigner les composants pour
  afficher le header et le footer danss chaque page */
const HeaderFooterLayout = () => {
  return (
    <>
      
      <Main>
        <Navbar />
        <Outlet />
      </Main>
      <Footer />

    </>
  );
};
/* on utilise la variable router pour définir les routes de l'application*/
const router = createBrowserRouter([
  {
    /*
    on utilise element pour définir le layout de l'application et outlet
    pour afficher les composants dans chaque route */
    element: <HeaderFooterLayout />,
    /*
    on utilise errorElement pour définir la page d'erreur dans toute les routes */
    errorElement: <ErreurPageNotFound/>,
    /*
    children permet de définir les routes de l'application */
    children: [
      {
        /*on utilise path pour définir le chemin de la route */
        path: "/",
        /*on utilise element pour définir le composant à afficher */
        element: <PageAccueil />

      },
      {
        path: "/Apropos",
        element: <PageApropos />
      },

    ],
  },
]);

/*
on utilise la variable root pour définir le composant qui sera affiché dans le DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* on utilise root.render pour afficher le composant RouterProvider qui permet de
définir les routes de l'application*/
root.render(
  /* on utilise React.StrictMode pour afficher les erreurs dans la console */
  /* on utilise RouterProvider pour définir les routes de l'application */
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
