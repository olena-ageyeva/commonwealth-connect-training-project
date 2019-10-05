import React from "react";
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import Help from '../Help/Help'

const routes = {
    "/": () => <Home />,
    "/help": () => <Help />,
    "/profile": () => <Profile />
  };
  export default routes;