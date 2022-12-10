import React from "react";
import { storiesOf } from "@storybook/react";

import MoviePage from "../MoviePage";

storiesOf("MoviePage", module).add("default", () => (
  <MoviePage
    title="The Devil Wears Prada"
    posterUrl="https://image.tmdb.org/t/p/w500/mJbzOaF5V0Q5xwYycbwLfYjMP7V.jpg"
    actors={[
      {
        name: "Meryl Streep",
        avatarUrl:
          "https://image.tmdb.org/t/p/w200/2jNXoDDbzWbZn0xu4N0oYpYQljq.jpg",
      },
      {
        name: "Anne Hathaway",
        avatarUrl:
          "https://image.tmdb.org/t/p/w200/b5JmBmFt71rK5R7LJ0KaaPPf9p.jpg",
      },
      {
        name: "Emily Blunt",
        avatarUrl:
          "https://image.tmdb.org/t/p/w200/mR6JwU6pWUZ4axpxZ0aI4eL0X8P.jpg",
      },
    ]}
    relatedMovies={[
      {
        title: "Kramer vs. Kramer",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/4jZzAqfIYpTpIwYvSJTprW8j9Ls.jpg",
      },
    //  got cut off
    ]}
    ></MoviePage>
));