import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movie = getData("movie");
const actor = getData("actor");

fixture("ActorPage").page("http://localhost:3000");

test("should render actor name and image", async (t) => {
  const actorPage = Selector("[data-testid='actor-page']");

  await t
    .expect(actorPage.find("img").getAttribute("src"))
    .eql(actor.imageUrl)
    .expect(actorPage.find("h2").textContent)
    .eql(actor.name);
});

test("should render related movies", async (t) => {
  const actorPage = Selector("[data-testid='actor-page']");

  await t
    .expect(actorPage.find("h3").textContent)
    .eql(`Movies with ${actor.name}`)
    .expect(actorPage.find("[data-testid='movie-card']").count)
    .eql(actor.movies.length);
});
