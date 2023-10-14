import React from "react";
import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
    </div>
  );
}
