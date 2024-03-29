import { TableProps } from "./types";
import React, { memo } from "react";
import {
  Table as MuiTable,
  LinearProgress,
  TablePagination,
} from "@mui/material";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { Skeleton } from "./Skeleton";
import { StyledTable } from "./styles";

const TableMemo: React.FC<TableProps> = ({
  loading = false,
  columns,
  rows,
  paginationProps,
  cellsCustomProps,
  loadingType = "bar",
  containerProps,
  sx,
  ...rest
}) => {
  return (
    <StyledTable {...containerProps} sx={sx}>
      {loading && loadingType === "bar" && (
        <LinearProgress sx={{ position: "absolute", top: 0, width: "100%" }} />
      )}
      <MuiTable {...rest}>
        <TableHead columns={columns} cellsCustomProps={cellsCustomProps} />
        {loading && loadingType === "skeleton" ? (
          <Skeleton columns={columns} />
        ) : (
          <TableBody
            rows={rows}
            columns={columns}
            cellsCustomProps={cellsCustomProps}
          />
        )}
      </MuiTable>
      {paginationProps && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`
          }
          labelRowsPerPage={"Itens por página"}
          component="div"
          {...paginationProps}
        />
      )}
    </StyledTable>
  );
};
export const Table = memo(TableMemo);
