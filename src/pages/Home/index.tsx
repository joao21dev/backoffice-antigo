import React, { ReactNode } from "react";

import Cardbank from "../../components/CardBank";
import Graphic from "../../components/graphicTransact/graphic";
import GridCard from "../../components/gridCard/gridCard";
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
