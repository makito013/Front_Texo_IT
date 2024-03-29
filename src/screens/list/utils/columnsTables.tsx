import { Column } from "../../../components/table/types";
import { ReactElement } from "react";

export const columnsMovies = ({
  yearFilter,
  awardFilter,
}: {
  yearFilter: ReactElement;
  awardFilter: ReactElement;
}): Column[] => [
  {
    header: "Id",
    accessor: "id",
    width: 80,
  },
  {
    header: "Ano",
    accessor: "year",
    filter: yearFilter,
    width: 100,
  },
  {
    header: "Título",
    accessor: "title",
  },
  {
    header: "Vencedor",
    accessor: "award",
    filter: awardFilter,
    columnAppend: (e) => (e ? "Sim" : "Não"),
    width: 100,
  },
];
