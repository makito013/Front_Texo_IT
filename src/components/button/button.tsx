import {
  Button as ButtonMaterial,
  ButtonTypeMap,
  CircularProgress,
  ExtendButtonBase,
} from "@mui/material";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

type MaterialButtonPropsType = ExtendButtonBase<
  ButtonTypeMap<object, "button">
>;

export type ButtonPropsType = {
  loading?: boolean;
  label: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
  fullWidth?: boolean;
  buttonProps?: MaterialButtonPropsType;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
export const Button = ({
  variant = "contained",
  fullWidth,
  onClick,
  ...props
}: ButtonPropsType) => {
  const ButtonPropsLoading = {
    startIcon: props.loading ? <CircularProgress size={24.5} /> : undefined,
    disabled: props.loading ? true : undefined,
  };

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <ButtonMaterial
      ref={parent}
      {...props.buttonProps}
      {...ButtonPropsLoading}
      size="large"
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRadius: 5,
        height: 49,
      }}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      type={props.type}
    >
      {/* {props.loading ? <CircularProgress size={24.5} /> : props.label} */}
      {props.label}
    </ButtonMaterial>
  );
};
