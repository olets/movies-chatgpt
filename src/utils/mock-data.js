import faker from "faker";

const actors = [...Array(10)].map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  imageUrl: faker.image.avatar(),
}));

const genres = [...Array(10)].map(() => ({
  id: faker.random.uuid(),
  name: faker.random.word(),
  description: faker.lorem.sentence(),
  movies: [...Array(10)].map(() => ({
    id: faker.random.uuid(),
    title: faker.random.word(),
    imageUrl: faker.image.image(),
    rating: faker.random.number({ min: 0, max: 10 }),
  })),
}));

const movies = [...Array(10)].map(() => ({
  id: faker.random.uuid(),
  title: faker.random.word(),
  imageUrl: faker.image.image(),
  rating: faker.random.number({ min: 0, max: 10 }),
  actors: actors.slice(0, 3),
  genre: genres[0],
}));

const movie = movies[0];
const genre = genres[0];

export const getData = (type) => {
  switch (type) {
    case "movies":
      return movies;
    case "movie":
      return movie;
    case "genre":
      return genre;
    default:
      return [];
  }
};
