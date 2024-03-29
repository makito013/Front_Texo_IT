import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useContext, useEffect, useState } from "react";
import { GetMovies } from "../../services/movies";
import { Button, Input, Table } from "../../components";
import { GetMoviesResponse } from "../../services/types";
import { ContainerInfo, SubTitleCard, TitleCard } from "./style";
import {
  columnsMinAndMaxInterval,
  columnsWinCounYear,
  columnsWinCountStudio,
  columnsMovies,
} from "./utils/columnsTables";
import { MoviesContext } from "../../contexts/moviesContext";
import Loading from "../../components/loading";

let timerToSearch: NodeJS.Timeout | undefined;
let moviesList = { movies: [], count: 0 } as GetMoviesResponse["data"];
let yearToSearch = "";
export const Dashboard = () => {
  const { isLoading, minAndMaxInterval, winCountStudio, winCountYear, error } =
    useContext(MoviesContext);
  const [showModalError, setShowModalError] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetMovies({}).then((movies) => {
      if (movies.error) setShowModalError(true);
      moviesList = movies.data;
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading && error) setShowModalError(true);
  }, [isLoading]);

  const handleInputYearChange = (value: string) => {
    if (timerToSearch) {
      clearTimeout(timerToSearch);
    }

    timerToSearch = setTimeout(() => {
      searchByYear(value);
    }, 100);
  };

  const searchByYear = (year: string, limit = 10, page = 0) => {
    setLoading(true);
    yearToSearch = year;
    GetMovies({ year, limit, page }).then((movies) => {
      if (movies.error) setShowModalError(true);
      moviesList = movies.data;
      setLoading(false);
    });
  };

  const handleChangePage = async (newPage: number) => {
    setPage(newPage);
    searchByYear(yearToSearch, 10, newPage);
  };

  return (
    <>
      <Dialog
        open={showModalError}
        keepMounted
        onClose={() => setShowModalError(false)}
      >
        <DialogTitle>{"Ops, algo deu errado!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tivemos problema ao coletar um ou mais dados do dashboard!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button label="fechar" onClick={() => setShowModalError(false)} />
        </DialogActions>
      </Dialog>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <ContainerInfo>
            <Loading open={isLoading} />
            <TitleCard color="primary">
              Lista de anos com múltiplos vencedores
            </TitleCard>
            <Table
              sx={{
                maxHeight: 440,
              }}
              rows={winCountYear}
              columns={columnsWinCounYear}
            />
          </ContainerInfo>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContainerInfo>
            <Loading open={isLoading} />
            <TitleCard color="primary">Top 3 estúdios vencedores</TitleCard>
            <Table
              sx={{
                maxHeight: 440,
              }}
              rows={winCountStudio}
              columns={columnsWinCountStudio}
            />
          </ContainerInfo>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContainerInfo>
            <Loading open={isLoading} />
            <TitleCard color="primary">
              Produtores com maior e menor intervalo entre vitórias
            </TitleCard>
            <SubTitleCard>Máximo:</SubTitleCard>
            <Table
              rows={minAndMaxInterval.max}
              columns={columnsMinAndMaxInterval}
            />
            <SubTitleCard style={{ marginTop: "24px" }}>Mínimo:</SubTitleCard>
            <Table
              rows={minAndMaxInterval.min}
              columns={columnsMinAndMaxInterval}
            />
          </ContainerInfo>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContainerInfo>
            <Loading open={loading} />
            <TitleCard color="primary">Lista de vencedores por ano</TitleCard>
            <Input
              placeholder="Buscar por ano"
              style={{ marginBottom: "16px" }}
              maxLength={4}
              type="number"
              onChange={handleInputYearChange}
            />
            <Table
              rows={moviesList.movies}
              columns={columnsMovies}
              paginationProps={{
                rowsPerPage: 10,
                count: moviesList.count,
                page,
                onPageChange: (_, newPage) => handleChangePage(newPage),
                rowsPerPageOptions: [],
              }}
            />
          </ContainerInfo>
        </Grid>
      </Grid>
    </>
  );
};
