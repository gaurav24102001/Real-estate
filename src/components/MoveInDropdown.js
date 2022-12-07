import React, { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { HouseContext } from "./HouseContext";
import { fontSize } from "@mui/system";

const MoveInDropdown = () => {
  const { date, setDate } = useContext(HouseContext);
  const handleChange = (data) => {
    setDate(data.$d.toISOString().split("T")[0]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="MoveIn Date"
        value={date}
        className="w-full text-left text-black"
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            
            {...params}
            sx={{
              svg: { color: '#6D28D9' },
              input : {color: 'black'},
              label: {color: 'black', fontSize : 15, fontWeight: 700 }
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MoveInDropdown;
