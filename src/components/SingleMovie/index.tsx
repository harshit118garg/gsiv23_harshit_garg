import React from "react";
import { TopNav } from "../TopNav";
import './styles/index.scss'

interface SingleMoviePropTypes {
  navProp: boolean;
}

export const SingleMovie = ({ navProp }: SingleMoviePropTypes) => {
  return (
    <>
      <TopNav navProp={navProp} />
      <h2>Hello</h2>
    </>
  );
};
