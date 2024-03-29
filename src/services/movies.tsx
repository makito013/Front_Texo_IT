import { AxiosError } from "axios";
import api from "./index";
import {
  GetMoviesResponse,
  MinAndMaxIntervalResponse,
  PaginationParams,
  WinCountByStudioResponse,
  WinCountByYearResponse,
} from "./types";

export const login = async (
  email: string,
  password: string,
  session: string
) => {
  const response = await api.post(`auth/oidc/interaction/${session}`, {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const GetYearWinner = async (): Promise<WinCountByYearResponse> => {
  try {
    const { data } = await api.get(`movies/winCountByYear`);
    return { data };
  } catch (e) {
    return { data: [], error: e as AxiosError };
  }
};

export const GetWinCountByStudio = async ({
  limit = 10,
  page = 0,
}: PaginationParams): Promise<WinCountByStudioResponse> => {
  try {
    const { data } = await api.get(`movies/winCountByStudio`, {
      params: {
        limit,
        page,
      },
    });
    return { data };
  } catch (e) {
    return { data: [], error: e as AxiosError };
  }
};

export const GetMinAndMaxInterval =
  async (): Promise<MinAndMaxIntervalResponse> => {
    try {
      const { data } = await api.get(`movies/interval/minAndMax`);
      return { data };
    } catch (e) {
      return {
        data: { min: [], max: [] },
        error: e as AxiosError,
      };
    }
  };

export const GetMovies = async ({
  year,
  limit = 10,
  page = 0,
  award,
}: PaginationParams & {
  year?: string;
  award?: boolean;
}): Promise<GetMoviesResponse> => {
  try {
    const { data } = await api.get(`movies/`, {
      params: {
        year,
        limit,
        page,
        award,
      },
    });
    return { data };
  } catch (e) {
    return {
      data: { movies: [], count: 0 },
      error: e as AxiosError,
    };
  }
};
