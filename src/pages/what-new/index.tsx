import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

const WhatNew: React.FC = () => {
  const [color, setColor] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <div className="bg-sky-200 px-8 py-8 rounded">
        <FormControl className="grid gap-y-4 w-full">
          <TextField label="Logo" variant="outlined" />

          <TextField label="Heading" variant="outlined" />

          <TextField label="Name" variant="outlined" />

          <TextField label="Paragraph" variant="outlined" multiline rows={4} />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleChange}
            >
              <MenuItem value={"#ff6b6b"}>Red</MenuItem>
              <MenuItem value={"#f06595"}>Pink</MenuItem>
              <MenuItem value={"#cc5de8"}>Grape</MenuItem>
              <MenuItem value={"#339af0"}>Blue</MenuItem>
              <MenuItem value={"#20c997"}>Teal</MenuItem>
              <MenuItem value={"#94d82d"}>Lime</MenuItem>
              <MenuItem value={"#ff922b"}>Orange</MenuItem>
            </Select>
          </FormControl>

          <Button>Save and Preview</Button>
        </FormControl>
      </div>

      <div className="px-8 py-4 rounded flex justify-center">
        <div
          className="marvel-device note8"
          style={{ maxHeight: 600, maxWidth: 360 }}
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
          <div className="screen p-4">
            <div className="h-full grid grid-rows-4 gap-4">
              <div className="flex justify-center items-center">
                <p>Logo</p>
              </div>

              <div className="flex justify-center items-center">Heading</div>

              <div className="flex justify-center items-center">Name</div>

              <div className="flex justify-center items-center">Paragraph</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
