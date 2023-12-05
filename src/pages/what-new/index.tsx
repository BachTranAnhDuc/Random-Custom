import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { handleChangePhone } from "../../features/phone/phoneSlice";

const WhatNew: React.FC = () => {
  const phoneData = useAppSelector((store) => store.phone);
  const dispatch = useDispatch();

  const [logo, setLogo] = useState<string>(phoneData.logo);
  const [heading, setHeading] = useState<string>(phoneData.heading);
  const [getName, setName] = useState<string>(phoneData.name);
  const [paragraph, setParagraph] = useState<string>(phoneData.paragraph);
  const [color, setColor] = useState<string>(phoneData.color);

  const handleChangeLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(event.target.value);
  };

  const handleChangeHeading = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeParagraph = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setParagraph(event.target.value);
  };

  const handleChangeColor = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  const handleSubmit = () => {
    dispatch(
      handleChangePhone({ logo, heading, name: getName, paragraph, color }),
    );
  };

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <div className="bg-gray-50 shadow-lg px-8 py-8 rounded">
        <FormControl className="grid gap-y-4 w-full">
          <TextField
            label="Logo"
            variant="outlined"
            value={logo}
            onChange={handleChangeLogo}
          />

          <TextField
            label="Heading"
            variant="outlined"
            value={heading}
            onChange={handleChangeHeading}
          />
          <TextField
            label="Name"
            variant="outlined"
            value={getName}
            onChange={handleChangeName}
          />

          <TextField
            label="Paragraph"
            variant="outlined"
            multiline
            rows={4}
            value={paragraph}
            onChange={handleChangeParagraph}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleChangeColor}
            >
              <MenuItem value={"#ffffff"}>White</MenuItem>
              <MenuItem value={"#f06595"}>Pink</MenuItem>
              <MenuItem value={"#cc5de8"}>Grape</MenuItem>
              <MenuItem value={"#339af0"}>Blue</MenuItem>
              <MenuItem value={"#20c997"}>Teal</MenuItem>
              <MenuItem value={"#94d82d"}>Lime</MenuItem>
              <MenuItem value={"#ff922b"}>Orange</MenuItem>
            </Select>
          </FormControl>

          <Button
            onClick={handleSubmit}
            variant="contained"
            className="cursor-pointer"
            size="large"
          >
            <p className="text-sm font-medium">Save and Preview</p>
          </Button>
        </FormControl>
      </div>

      <div className="px-8 py-4 rounded flex justify-center">
        <div
          className="marvel-device note8"
          style={{
            maxHeight: 600,
            maxWidth: 360,
          }}
        >
          <div className="inner"></div>

          <div className="overflow">
            <div className="shadow"></div>
          </div>

          <div className="speaker"></div>

          <div className="sensors"></div>

          <div className="more-sensors"></div>

          <div className="sleep"></div>

          <div className="volume"></div>

          <div className="camera"></div>

          <div
            className="screen p-4"
            style={{
              backgroundColor: phoneData.color,
              overflowY: "scroll",
            }}
          >
            <div className="h-full grid grid-rows-4 gap-4">
              <div className="flex justify-center items-center">
                <p>{phoneData.logo}</p>
              </div>

              <div className="flex justify-center items-center">
                {phoneData.heading}
              </div>

              <div className="flex justify-center items-center">
                {phoneData.name}
              </div>

              <div className="text-center">{phoneData.paragraph}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
