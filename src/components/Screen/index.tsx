import React from "react";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";

export const Screen = () => {
  return (
    <>
      <div className="screen">
        <MoviesList />
        <div className="pagination"></div>
      </div>
    </>
  );
};
