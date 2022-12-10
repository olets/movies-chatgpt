import React from "react";
import { storiesOf } from "@storybook/react";

import PopularMovies from "../PopularMovies";

storiesOf("PopularMovies", module).add("default", () => (
  <PopularMovies
    movies={[
      {
        title: "The Devil Wears Prada",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/mJbzOaF5V0Q5xwYycbwLfYjMP7V.jpg",
        rating: 6.9,
      },
      {
        title: "Kramer vs. Kramer",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/4jZzAqfIYpTpIwYvSJTprW8j9Ls.jpg",
        rating: 7.8,
      },
      {
        title: "Julie & Julia",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/8F5K7SDuJYvGlVlJWn5jKV7oIVP.jpg",
        rating: 7.3,
      },
    ]}
  />
));
