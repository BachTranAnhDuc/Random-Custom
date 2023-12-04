import { Box } from "@mui/material";
import React from "react";
import { AppBarComponent, TabsList } from "../components";
import { Outlet } from "react-router-dom";

const ShareLayout: React.FC = () => {
  return (
    <Box>
      <AppBarComponent></AppBarComponent>

      <TabsList></TabsList>

      <div className="max-w-7xl mt-8 mx-auto">
        <Outlet></Outlet>
      </div>
    </Box>
  );
};

export default ShareLayout;
