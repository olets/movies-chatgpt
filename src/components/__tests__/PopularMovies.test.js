import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movies = getData("movies");

fixture("PopularMovies").page("http://localhost:3000");

test("should render popular movies", async (t) => {
  const popularMovies = Selector("[data-testid='popular-movies']");

  await t
    .expect(popularMovies.find("h2").textContent)
    .eql("Popular movies")
    .expect(popularMovies.find("[data-testid='movie-card']").count)
    .eql(movies.length);
});
