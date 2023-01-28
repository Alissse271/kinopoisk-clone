interface IMovieAPI {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface IMovie {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
}

interface IMovieInfoAPI {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  BoxOffice: string;
  Country: string;
  imdbRating: string;
  Poster: string;
  imdbID: string;
}

interface IMovieInfo {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  boxOffice: string;
  country: string;
  imdbRating: string;
  poster: string;
  imdbID: string;
}
interface FilterValue {
  s: string;
  y: string;
  page: number;
}
interface IUserInfo {
  name: string;
  email: string;
  isAuth: boolean;
}
export type { IMovie, IMovieAPI, IMovieInfoAPI, IMovieInfo, FilterValue, IUserInfo };
