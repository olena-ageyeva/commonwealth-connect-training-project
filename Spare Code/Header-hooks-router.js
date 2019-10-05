
import React from "react";
import { A, useRoutes } from "hookrouter";
import Routes from "../Routes/Routes";

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div className="navbar-header">
      <A className="nav_brand" href="/">
        Commonwealth Connect
      </A>
    </div>

    <span className="nav_welcome">Hello!</span>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <A className="nav_link" href="/help">
          Help
        </A>
      </li>
      <li>
        <A className="nav-link" href="/profile">
          My Profile
        </A>
      </li>
    </ul>
    {routeResult}
  </div>
</nav>;
