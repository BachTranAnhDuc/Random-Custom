import { Box } from "@mui/material";
import React from "react";
import { AppBarComponent, TabsList } from "../components";
import { Outlet } from "react-router-dom";

const ShareLayout: React.FC = () => {
  return (
    <Box>
      <AppBarComponent></AppBarComponent>

      <TabsList></TabsList>

      <Outlet></Outlet>
    </Box>
  );
};

export default ShareLayout;
