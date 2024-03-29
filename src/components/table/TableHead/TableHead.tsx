import React, { memo, useMemo } from "react";
import { TableHead as MuiTableHead, Typography } from "@mui/material";
import { TableHeadProps } from "./types";
import { StyledTableCell, StyledTableHeader } from "./styles";

const TableHeadMemo: React.FC<TableHeadProps> = ({
  columns,
  cellsCustomProps = {},
}) => {
  const columnWidths = useMemo(() => {
    return Object.assign(
      {},
      ...columns.map((column) => ({
        [column.accessor]: column.width || "auto",
      }))
    );
  }, [columns]);

  return (
    <MuiTableHead>
      <StyledTableHeader>
        {columns.map(
          ({ accessor, cellProps, contentProps, header, filter }) => (
            <StyledTableCell
              key={accessor}
              {...cellsCustomProps[accessor]}
              {...cellProps}
              width={columnWidths[accessor]}
            >
              <Typography
                color={"secondary.main"}
                fontWeight={700}
                lineHeight="18px"
                align="center"
                {...contentProps}
              >
                {header}
              </Typography>
              {filter || null}
            </StyledTableCell>
          )
        )}
      </StyledTableHeader>
    </MuiTableHead>
  );
};

export const TableHead = memo(TableHeadMemo);
