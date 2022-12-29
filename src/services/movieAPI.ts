import axios from "axios";

class MovieAPI {
  private readonly BASE_URL = "";
  private readonly ENDPOINTS = {
    title: "t",
    year: "y",
    search: "s",
  };

  private randomMovieArray = [
    "Star Wars",
    "Game of Thrones",
    "Harry Potter",
    "Spiderman",
    "Hobbit",
    "Hunger Games",
    "Avengers",
  ];
  private randomNumber = Math.floor(Math.random() * this.randomMovieArray.length - 1 + 1);
  private randomMovie = this.randomMovieArray[this.randomNumber];

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getMoviesBySearch() {
    const { data } = await this.API.get(
      `https://omdbapi.com/?s=${this.randomMovie}&apikey=3dc510bf`,
    );

    return data.Search;
  }
}

export const movieAPI = new MovieAPI();
