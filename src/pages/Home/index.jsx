import React, { ReactNode, useEffect, useState } from "react";

import axios from "axios";

import Cardbank from "../../components/dashboard/CardBank";
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
