import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

import Cardbank from "../../components/dashboard/CardBank";
import Graphic from "../../components/dashboard/graphicTransact/graphic";
import GridCard from "../../components/dashboard/gridCard/gridCard";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

export default function Home() {

  return (
    <>
      <SidebarWithHeader>
        <Cardbank  />
        <GridCard />
      </SidebarWithHeader>
    </>
  );
}
