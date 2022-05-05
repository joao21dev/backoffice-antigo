import React, { ReactNode } from "react";

import Cardbank from "../../components/dashboard/CardBank";
import Graphic from "../../components/dashboard/graphicTransact/graphic";
import GridCard from "../../components/dashboard/gridCard/gridCard";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

export default function Home() {
  return (
    <>
      <SidebarWithHeader>
        <Cardbank />
        <GridCard />
      </SidebarWithHeader>
    </>
  );
}
