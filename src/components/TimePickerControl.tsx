import { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
// We used a DesktopDateTimePicker instead of just a Time Picker because the DateTime pickers allow the use of milliseconds (important for TimeTravel page).
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { ClockPickerView } from "@mui/x-date-pickers/internals/models/views";
import { TextField } from "@mui/material";

interface TimePickerControlProps {
  label?: string;
  inputFormat?: string;
  views?: ClockPickerView[];
  disableOpenPicker?: boolean;
  width?: number | string;
}

export function TimePickerControl({
  label = "Time",
  inputFormat = "HH:mm",
  views = ["hours", "minutes"],
  disableOpenPicker = false,
  width = "100%",
}: TimePickerControlProps) {
  const [value, setValue] = useState<Date | null>(
    new Date("2022-01-01T00:00:00.000Z")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        label={label}
        value={value}
        views={views}
        inputFormat={inputFormat}
        disableOpenPicker={disableOpenPicker}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: { width } }} />
        )}
      />
    </LocalizationProvider>
  );
}
