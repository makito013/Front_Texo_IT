import { TableProps } from "../types";

export type TableBodyProps = Pick<
  TableProps,
  "rows" | "columns" | "cellsCustomProps"
>;
