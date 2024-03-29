import { MenuItem, TextField, TextFieldProps } from "@mui/material";

export type SelectPropsType = {
  placeholder: string;
  options: {
    label: string;
    value: string | number;
  }[];
} & TextFieldProps;
export const Select = ({ placeholder, options, ...props }: SelectPropsType) => {
  return (
    <div style={{ width: "100%" }}>
      <TextField
        size="small"
        fullWidth
        inputProps={{ style: { borderRadius: 5 } }}
        placeholder={placeholder}
        defaultValue={""}
        select
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={String(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
