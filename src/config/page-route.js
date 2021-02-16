import React from "react";
import { Redirect } from "react-router";
import Home from "./../pages/Home.js";
import Contact from "./../pages/Contact.js";
import About from "./../pages/About.js";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/Home" />,
  },

  {
    path: "/Home",
    component: () => <Home />,
  },

  {
    path: "/About",
    component: () => <About />,
  },

  {
    path: "/Contact",
    component: () => <Contact />,
  },
];

export default routes;
