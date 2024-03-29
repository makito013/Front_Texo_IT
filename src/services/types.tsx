import { AxiosError } from "axios";

export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type ServiceDefaultResponse<t> = {
  data: t;
  error?: AxiosError;
};

export type WinCountByYearResponse = ServiceDefaultResponse<
  {
    year: number;
    count: number;
  }[]
>;

export type WinCountByStudioResponse = ServiceDefaultResponse<
  {
    studioName: string;
    count: number;
  }[]
>;

type IntervalProducerWinType = {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
};

export type MinAndMaxIntervalResponse = ServiceDefaultResponse<{
  min: IntervalProducerWinType[];
  max: IntervalProducerWinType[];
}>;

export type GetMoviesResponse = ServiceDefaultResponse<{
  movies: {
    id: number;
    title: string;
    year: number;
    producer: string;
    award: boolean;
    studio: string;
  }[];
  count: number;
}>;
