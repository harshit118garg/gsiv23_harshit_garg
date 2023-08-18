import React from "react";
import "./styles/index.scss";
import dummyJson from "../../static/dummy.json";
import { reduceTextLength } from "../../helpers/textHelper";

export const MoviesList = () => {
  console.log("dummyJson", dummyJson);
  return (
    <>
      <div className="movies-list">
        <div className="movie-cards">
          {dummyJson &&
            dummyJson.map((data) => {
              return (
                <div className="card" key={data.id}>
                  <div className="card-image">
                    <img src={data.image} alt={data.title} />
                  </div>
                  <div className="movie-info">
                    <div className="row">
                      <div className="title">{data.title}</div>
                      <div className="rating">{data.releaseYear}</div>
                    </div>
                    <div className="description">
                      <p>{reduceTextLength(data.description)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
