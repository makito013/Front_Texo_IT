import React from "react";
import {
  TableCellProps,
  TableContainerProps,
  TableProps as MuiTableProps,
  TypographyProps,
  TablePaginationProps,
  SxProps,
} from "@mui/material";
import { Theme } from "@emotion/react";

export type Column = {
  accessor: string;
  header?: string | React.ReactElement;
  color?: string;
  width?: string | number;
  cellProps?: TableCellProps;
  contentProps?: TypographyProps;
  columnAppend?: (e: string | number | boolean) => React.ReactNode | string;
  filter?: React.ReactElement;
};

export type Row = {
  id?: string | number;
  rowAppend?: React.ReactNode;
} & { [key: string]: string | number | boolean };

export type CellCustomProps = {
  [key: string]: TableCellProps;
};

export type TableProps = MuiTableProps & {
  loading?: boolean;
  columns: Column[];
  paginationProps?: TablePaginationProps & {
    component?: string;
  };
  rows: Row[];
  cellsCustomProps?: CellCustomProps;
  loadingType?: "bar" | "skeleton";
  containerProps?: TableContainerProps;
  sx?: SxProps<Theme>;
};
