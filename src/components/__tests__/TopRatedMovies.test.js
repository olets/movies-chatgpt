import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movies = getData("movies");

fixture("TopRatedMovies").page("http://localhost:3000");

test("should render top rated movies", async (t) => {
  const topRatedMovies = Selector("[data-testid='top-rated-movies']");

  await t
    .expect(topRatedMovies.find("h2").textContent)
    .eql("Top rated movies")
    .expect(topRatedMovies.find("[data-testid='movie-card']").count)
    .eql(movies.length);
});
