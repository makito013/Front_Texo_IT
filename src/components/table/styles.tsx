import { TableContainer, styled } from "@mui/material";

export const StyledTable = styled(TableContainer)(({ theme }) => ({
  position: "relative",
  overflowX: "auto",
  borderRadius: "10px",
  border: "1px solid",
  borderColor: theme.border.main,
}));
