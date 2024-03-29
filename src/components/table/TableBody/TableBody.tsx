import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import React, { memo } from "react";
import { TableBodyProps } from "./types";

const TableBodyMemo: React.FC<TableBodyProps> = ({
  rows,
  columns,
  cellsCustomProps = {},
}) => {
  return (
    <MuiTableBody>
      {rows.map((row, rowId) => (
        <React.Fragment key={row.id}>
          <TableRow key={`${row.id}-t-row`}>
            {columns.map(({ accessor, columnAppend }) => (
              <TableCell
                key={`${accessor}-${row.id}`}
                {...cellsCustomProps[accessor]}
              >
                {columnAppend ? columnAppend(row[accessor]) : row[accessor]}
              </TableCell>
            ))}
          </TableRow>
          {row.rowAppend && <div key={`${rowId}-append`}>{row.rowAppend}</div>}
        </React.Fragment>
      ))}
    </MuiTableBody>
  );
};

export const TableBody = memo(TableBodyMemo);
