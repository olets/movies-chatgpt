import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movie = getData("movie");

fixture("MoviePage").page("http://localhost:3000");

test("should render movie name and image", async (t) => {
  const moviePage = Selector("[data-testid='movie-page']");

  await t
    .expect(moviePage.find("img").getAttribute("src"))
    .eql(movie.imageUrl)
    .expect(moviePage.find("h2").textContent)
    .eql(movie.title);
});

test("should render list of actors", async (t) => {
  const moviePage = Selector("[data-testid='movie-page']");

  await t
    .expect(moviePage.find("h3").textContent)
    .eql("Actors")
    .expect(moviePage.find("[data-testid='actor-card']").count)
    .eql(movie.actors.length);
});

test("should render related movies", async (t) => {
  const moviePage = Selector("[data-testid='movie-page']");

  await t
    .expect(moviePage.find("h3").textContent)
    .eql(`Other movies in ${movie.genre.name}`)
    .expect(moviePage.find("[data-testid='movie-card']").count)
    .eql(movie.genre.movies.length);
});
