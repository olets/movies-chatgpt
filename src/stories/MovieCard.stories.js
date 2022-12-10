import React from "react";
import { storiesOf } from "@storybook/react";

import MovieCard from "../MovieCard";

storiesOf("MovieCard", module).add("default", () => (
  <MovieCard
    title="The Devil Wears Prada"
    posterUrl="https://image.tmdb.org/t/p/w500/mJbzOaF5V0Q5xwYycbwLfYjMP7V.jpg"
    rating={6.9}
  />
));
