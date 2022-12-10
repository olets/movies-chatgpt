import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movie = getData("movie");
const genre = getData("genre");

fixture("GenrePage").page("http://localhost:3000");

test("should render genre name and description", async (t) => {
  const genrePage = Selector("[data-testid='genre-page']");

  await t
    .expect(genrePage.find("h2").textContent)
    .eql(genre.name)
    .expect(genrePage.find("p").textContent)
    .eql(genre.description);
});

test("should render related movies", async (t) => {
  const genrePage = Selector("[data-testid='genre-page']");

  await t
    .expect(genrePage.find("h3").textContent)
    .eql(`Movies in ${genre.name}`)
    .expect(genrePage.find("[data-testid='movie-card']").count)
    .eql(genre.movies.length);
});
