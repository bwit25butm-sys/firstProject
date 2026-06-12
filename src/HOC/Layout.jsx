import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "../component/navigation/ToolBar";
function Layout() {
  return (
    <div>
        <Toolbar/>
      <Outlet />
    </div>
  );
}

export default Layout;