import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movie = getData("movie");

fixture("MovieCard").page("http://localhost:3000");

test("should render movie name and image", async (t) => {
  const movieCard = Selector("[data-testid='movie-card']");

  await t
    .expect(movieCard.find("img").getAttribute("src"))
    .eql(movie.imageUrl)
    .expect(movieCard.find("h3").textContent)
    .eql(movie.title);
});

test("should link to movie page when clicked", async (t) => {
  const movieCard = Selector("[data-testid='movie-card']");

  await t
    .click(movieCard)
    .expect(Selector("[data-testid='movie-page']").exists)
    .ok();
});
