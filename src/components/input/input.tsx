import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import { useState } from "react";
import { MaskOnlyNumber } from "./mask";

export type InputPropsType = {
  placeholder: string;
  label?: string;
  maxLength?: number;
  type?: string;
  onChange?: (value: string) => void;
} & Omit<OutlinedInputProps, "margin" | "onChange">;
export const Input = ({
  placeholder,
  maxLength,
  type,
  value,
  onChange,
  ...props
}: InputPropsType) => {
  const [valueInput, setValueInput] = useState(props.defaultValue || "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const maskInputValue =
      type === "number" ? MaskOnlyNumber(e.target.value) : e.target.value;
    setValueInput(maskInputValue);

    if (typeof onChange !== "undefined") onChange(maskInputValue);
  };

  return (
    <div style={{ width: "100%" }}>
      <OutlinedInput
        size="small"
        fullWidth
        inputProps={{ style: { borderRadius: 5 }, maxLength }}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value || valueInput}
        {...props}
      />
    </div>
  );
};
