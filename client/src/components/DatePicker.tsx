import React from "react";
import dayjs, { Dayjs } from "dayjs";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export const DatePicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col justify-around my-7 h-500">
        <DesktopDatePicker
          label="出発日"
          inputFormat="YYYY/MM/DD"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <DesktopDatePicker
          label="帰宅日"
          inputFormat="YYYY/MM/DD"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="YYYY/MM/DD"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </div>
    </LocalizationProvider>
  );
};
