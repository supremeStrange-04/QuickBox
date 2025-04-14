import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

function layout({ children }) {
  return (
    <div className="">
      <div className="flex min-h-screen overflow-y-hidden w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>

      <div className="md:ml-64"><TopHeader />{children}</div>
    </div>
  );
}

export default layout;
