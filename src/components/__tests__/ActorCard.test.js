import { Selector } from "testcafe";
import { getData } from "../../utils/mock-data";

const movie = getData("movie");
const actor = getData("actor");

fixture("ActorCard").page("http://localhost:3000");

test("should render actor name and image", async (t) => {
  const actorCard = Selector("[data-testid='actor-card']");

  await t
    .expect(actorCard.find("img").getAttribute("src"))
    .eql(actor.imageUrl)
    .expect(actorCard.find("h4").textContent)
    .eql(actor.name);
});

test("should link to actor page when clicked", async (t) => {
  const actorCard = Selector("[data-testid='actor-card']");

  await t
    .click(actorCard)
    .expect(Selector("[data-testid='actor-page']").exists)
    .ok();
});
