import React from "react";
import { storiesOf } from "@storybook/react";

import ActorCard from "../ActorCard";

storiesOf("ActorCard", module).add("default", () => (
  <ActorCard
    actorName="Meryl Streep"
    actorAvatarUrl="https://image.tmdb.org/t/p/w200/2jNXoDDbzWbZn0xu4N0oYpYQljq.jpg"
  />
));
