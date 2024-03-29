import { createContext, useEffect, useState } from "react";
import {
  GetMinAndMaxInterval,
  GetWinCountByStudio,
  GetYearWinner,
} from "../services/movies";
import {
  MinAndMaxIntervalResponse,
  WinCountByStudioResponse,
  WinCountByYearResponse,
} from "../services/types";

export type Context = {
  isLoading: boolean;
  winCountYear: WinCountByYearResponse["data"];
  winCountStudio: WinCountByStudioResponse["data"];
  minAndMaxInterval: MinAndMaxIntervalResponse["data"];
  error: boolean;
  fetchAll: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MoviesContext = createContext<Context>({} as any);

export const MoviesProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [winCountYear, setWinCountYear] = useState(
    [] as WinCountByYearResponse["data"]
  );
  const [winCountStudio, setWinCountStudio] = useState(
    [] as WinCountByStudioResponse["data"]
  );

  const [minAndMaxInterval, setMinAndMaxInterval] = useState({
    min: [],
    max: [],
  } as MinAndMaxIntervalResponse["data"]);

  useEffect(() => {
    console.log("entrei");
    getAllData();
  }, []);

  const getYearWinnerRequest = async () => {
    const { data, error } = await GetYearWinner();
    setWinCountYear(data);
    if (error) setError(true);
  };

  const getWinCountByStudio = async () => {
    const { data, error } = await GetWinCountByStudio({ limit: 3, page: 0 });
    setWinCountStudio(data);
    if (error) setError(true);
  };

  const getMinAndMaxInterval = async () => {
    const { data, error } = await GetMinAndMaxInterval();
    setMinAndMaxInterval(data);
    if (error) setError(true);
  };

  const getAllData = async () => {
    setIsLoading(true);
    await Promise.all([
      getYearWinnerRequest(),
      getWinCountByStudio(),
      getMinAndMaxInterval(),
    ]);
    setIsLoading(false);
  };

  const fetchAll = () => {
    getAllData();
  };

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        winCountYear,
        minAndMaxInterval,
        winCountStudio,
        error,
        fetchAll,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
