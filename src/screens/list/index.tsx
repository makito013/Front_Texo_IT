import { useEffect, useMemo, useState } from "react";
import { GetMovies } from "../../services/movies";
import { Input, Table, Select } from "../../components";
import { GetMoviesResponse } from "../../services/types";
import { Title } from "./style";
import { columnsMovies } from "./utils/columnsTables";
import Loading from "../../components/loading";
import { SelectEnum } from "./utils/selectEnum";

let moviesList = { movies: [], count: 0 } as GetMoviesResponse["data"];
let timerToSearch: NodeJS.Timeout | undefined;

export const List = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [yearFilter, setYearFilter] = useState<string | undefined>();
  const [yearAward, setAwardFilter] = useState<boolean | undefined>();
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  useEffect(() => {
    setLoading(true);
    GetMovies({
      year: yearFilter,
      limit: rowsPerPage,
      page,
      award: yearAward,
    })
      .then((movies) => {
        moviesList = movies.data;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, yearFilter, yearAward, rowsPerPage]);

  const onChangeSelect = (e: string) => {
    let filter: boolean | undefined = undefined;

    if (e === SelectEnum.NO) filter = false;
    else if (e === SelectEnum.YES) filter = true;

    setAwardFilter(filter);
  };

  const handleInputYearChange = (value: string) => {
    if (timerToSearch) {
      clearTimeout(timerToSearch);
    }

    timerToSearch = setTimeout(() => {
      setYearFilter(value);
    }, 100);
  };

  const tableColumns = useMemo(
    () =>
      columnsMovies({
        awardFilter: (
          <Select
            placeholder=""
            options={[
              { value: SelectEnum.YESNO, label: "Sim/Não" },
              { value: SelectEnum.YES, label: "Sim" },
              { value: SelectEnum.NO, label: "Não" },
            ]}
            onChange={(e) => onChangeSelect(e.target.value)}
          />
        ),
        yearFilter: (
          <Input
            placeholder=""
            onChange={handleInputYearChange}
            maxLength={4}
            type="number"
          />
        ),
      }),
    []
  );

  const handleChangePage = async (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (rows: string) => {
    setRowsPerPage(parseInt(rows));
  };

  return (
    <div>
      <Loading open={loading} />
      <Title color="primary">Lista de anos com múltiplos vencedores</Title>
      <Table
        rows={moviesList.movies}
        columns={tableColumns}
        paginationProps={{
          rowsPerPage: rowsPerPage,
          count: moviesList.count,
          page,
          onPageChange: (_, newPage) => handleChangePage(newPage),
          onRowsPerPageChange: (perPage) =>
            handleChangeRowsPerPage(perPage.target.value),
        }}
      />
    </div>
  );
};
