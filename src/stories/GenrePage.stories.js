import React from "react";
import { storiesOf } from "@storybook/react";

import GenrePage from "../GenrePage";

storiesOf("GenrePage", module).add("default", () => (
  <GenrePage
    genreName="Comedy"
    movies={[
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
