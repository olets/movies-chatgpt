import React from "react";
import { storiesOf } from "@storybook/react";

import TopRatedMovies from "../TopRatedMovies";

storiesOf("TopRatedMovies", module).add("default", () => (
  <TopRatedMovies
    movies={[
      {
        title: "The Shawshank Redemption",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        rating: 9.3,
      },
      {
        title: "The Godfather",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
        rating: 9.2,
      },
      {
        title: "The Godfather: Part II",
        posterUrl:
          "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
        rating: 9.0,
      },
    ]}
  />
));
