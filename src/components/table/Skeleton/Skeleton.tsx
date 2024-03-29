import { SkeletonProps } from "./types";
import { memo } from "react";
import {
  Skeleton as MuiSkeleton,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import { Column } from "../types";

export const StyledDivTable = styled("div")(({ theme }) => ({
  borderBottom: "1px solid",
  padding: "13px 10px 13px 0",
  margin: "0 10px",
  borderColor: theme.border.main,
}));

const SkeletonMemo: React.FC<SkeletonProps> = ({
  columns,
}: {
  columns: Column[];
}) => {
  return (
    <TableBody sx={{ width: "100%" }}>
      {new Array(10).fill(0).map((_, i) => (
        <TableRow>
          <TableCell colSpan={columns.length} style={{ border: 0, padding: 0 }}>
            <StyledDivTable style={{ borderBottom: i === 9 ? 0 : undefined }}>
              <MuiSkeleton
                data-testid={"table-skeleton"}
                key={`skeleton-${i}`}
                sx={{
                  height: "22px",
                }}
              />
            </StyledDivTable>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const Skeleton = memo(SkeletonMemo);
