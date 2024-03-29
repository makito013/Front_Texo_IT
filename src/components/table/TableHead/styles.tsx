import { TableCell, TableRow, styled } from "@mui/material";

export const StyledTableHeader = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.tertiary,
  fontWeight: "bold",
  maxHeight: "49px",
}));

export const StyledTableCell = styled(TableCell)(() => ({
  padding: "15px 10px",
}));
