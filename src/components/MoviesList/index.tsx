import { Card } from "../../subComps/Card";
import { Movie } from "../../types/types";
import { MoviesListTypes } from "./types/types";

export const MoviesList = ({ movies }: MoviesListTypes) => {
  return (
    <>
      {movies &&
        movies.map((data: Movie) => {
          return <Card movie={data} key={data.id} />;
        })}
    </>
  );
};
