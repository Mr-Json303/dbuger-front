import {
    FormControl,
    InputLabel,
    Select,
} from "@mui/material/";

import { Controller } from "react-hook-form";

export default function SelectCustom({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}){
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
      render={({
          labelId,
          label,
          children,
          ...field
      }) => (
        <Select labelId={labelId} label={label}>
            {children}
          </Select>
      )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};