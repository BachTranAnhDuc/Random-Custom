import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TabsList: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            label="Home"
            onClick={() => {
              navigate("/");
            }}
          />
          <Tab
            label="About US"
            onClick={() => {
              navigate("/about-us");
            }}
          />
          <Tab
            label="Products"
            onClick={() => {
              navigate("/products");
            }}
          />

          <Tab
            label="Services"
            onClick={() => {
              navigate("/services");
            }}
          />

          <Tab
            label="What's New"
            onClick={() => {
              navigate("/what-new");
            }}
          />

          <Tab
            label="Upcoming"
            onClick={() => {
              navigate("/upcoming");
            }}
          />

          <Tab
            label="Support"
            onClick={() => {
              navigate("/support");
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabsList;
