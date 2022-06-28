import React, { useEffect, useMemo, useState } from "react";

import axios from "axios";

import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlansDetailForm from "../../components/Plans/PlansDetailForm";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table";
import { Box, Checkbox } from "@chakra-ui/react";

const PlanDetail = () => {
  

  return (
    <>
      <SidebarWithHeader>
        <PlansDetailForm />
       
      </SidebarWithHeader>
    </>
  );
};

export default PlanDetail;
