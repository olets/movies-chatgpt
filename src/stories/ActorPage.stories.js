import React from "react";
import { storiesOf } from "@storybook/react";

import ActorPage from "../ActorPage";

storiesOf("ActorPage", module).add("default", () => (
  <ActorPage
    actorName="Meryl Streep"
    actorAvatarUrl="https://image.tmdb.org/t/p/w200/2jNXoDDbzWbZn0xu4N0oYpYQljq.jpg"
    actorMovies={[
      {
        title: "The Devil Wears Prada",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/mJbzOaF5V0Q5xwYycbwLfYjMP7V.jpg",
      },
      {
        title: "Kramer vs. Kramer",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/4jZzAqfIYpTpIwYvSJTprW8j9Ls.jpg",
      },
      {
        title: "Julie & Julia",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/8F5K7SDuJYvGlVlJWn5jKV7oIVP.jpg",
      },
    ]}
  />
));
