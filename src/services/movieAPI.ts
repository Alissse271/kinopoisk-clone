import axios from "axios";
import { FilterValue } from "types";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_SERVICES_MOVIE_API_BASE_URL;

  private randomMovieCollection = [
    "Star Wars",
    "Game of Thrones",
    "Harry Potter",
    "Wonder Woman",
    "Hobbit",
    "Hunger Games",
    "Avengers",
    "love",
    "war",
    "money",
    "man",
  ];
  private randomMovieTrendsCollection = [
    "Star Wars",
    "Game of Thrones",
    "Harry Potter",
    "Wonder Woman",
    "Hobbit",
    "Hunger Games",
    "Avengers",
  ];
  private randomNumber = Math.floor(Math.random() * this.randomMovieCollection.length - 1 + 1);
  private randomMovie = this.randomMovieCollection[this.randomNumber];

  private randomTrendsNumber = Math.floor(
    Math.random() * this.randomMovieTrendsCollection.length - 1 + 1,
  );
  private randomTrendMovie = this.randomMovieTrendsCollection[this.randomTrendsNumber];

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getRandomMovies(page: number) {
    const params = {
      s: this.randomMovie,
      page: page,
    };

    const { data } = await this.API.get("", { params });
    return data;
  }
  public async getMoviesBySearch(values: FilterValue) {
    const params = {
      s: values.s,
      y: values.y,
      page: values.page,
    };
    const { data } = await this.API.get("", { params });

    return data;
  }
  public async getTrends() {
    const params = {
      s: this.randomTrendMovie,
    };

    const { data } = await this.API.get("", { params });
    return data;
  }
  public async getMovieByIMDB(imdb: string) {
    const params = {
      i: imdb,
      plot: "full",
    };
    const { data } = await this.API.get("", { params });
    return data;
  }
}

export const movieAPI = new MovieAPI();
