import axios from "axios";

class MovieAPI {
  private readonly BASE_URL = "https://omdbapi.com/?&apikey=3dc510bf";

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

  public async getRandomMovies() {
    const { data } = await this.API.get(
      `https://omdbapi.com/?s=${this.randomMovie}&apikey=3dc510bf`,
    );

    return data.Search;
  }
  public async getMoviesBySearch(searchValue: string) {
    const { data } = await this.API.get(`https://omdbapi.com/?s=${searchValue}&apikey=3dc510bf`);

    return data.Search;
  }
  public async getMovieByIMDB(imdb: string) {
    const params = {
      i: imdb,
      plot: "full",
    };
    const { data } = await this.API.get(
      `https://omdbapi.com/?i=${params.i}&plot=${params.plot}&apikey=3dc510bf`,
    );
    return data;
  }
}

export const movieAPI = new MovieAPI();
