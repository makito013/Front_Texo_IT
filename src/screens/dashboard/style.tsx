import { Box, Typography, styled } from "@mui/material";

export const ContainerInfo = styled(Box)(() => ({
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 16px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 4px )",
  WebkitBackdropFilter: "blur( 4px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  padding: "16px",
  overflow: "hidden",
}));

export const TitleCard = styled(Typography)(() => ({
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "16px",
}));

export const SubTitleCard = styled(Typography)(() => ({
  fontSize: "18px",
  marginBottom: "16px",
}));
